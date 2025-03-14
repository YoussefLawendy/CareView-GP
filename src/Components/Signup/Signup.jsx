import React from "react";
import "./Signup.css";
import SignupPageSVG from "../../assets/images/Login&Signup BG.svg";
import LogoSVG from "../../assets/images/Login&Signup Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast/headless";

export default function Signup() {
    const navigate = useNavigate(); 

    
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("First name is required")
                .matches(
                    /^[A-Za-z]{3,}$/,
                    "First name must be at least 3 letters and contain only alphabetic characters."
                ),
            lastName: Yup.string()
                .required("Last name is required")
                .matches(
                    /^[A-Za-z]{3,}$/,
                    "Last name must be at least 3 letters and contain only alphabetic characters."
                ),
            phone: Yup.string()
                .required("Phone number is required")
                .matches(
                    /^(\+20|0)?1\d{9}$/,
                    "Phone number must be a valid Egyptian number (e.g., +201063361951 or 01063361951)."
                ),
            email: Yup.string()
                .required("Email is required")
                .email("Please enter a valid email address."),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
                ),
            confirmPassword: Yup.string()
                .required("Confirm password is required")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    "http://localhost:5296/api/Account/Register", 
                    {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phoneNumber: values.phone, 
                        password: values.password,
                        confirmPassword: values.confirmPassword,
                    }
                );

                console.log("Signup successful!", response.data);
                toast.success("Signed up successfully", {
                    position: "bottom-right",
                    duration: "200",
                });

                navigate("/login"); 
            } catch (error) {
                console.error(
                    "Signup failed:",
                    error.response?.data || error.message
                );
                toast.error(error.response.data.message, {
                    position: "bottom-right",
                    duration: "500",
                });
            }
        },
    });

    return (
        <>
            <div className="min-h-screen flex bg-bg">
                {/* Left Column for Image */}
                <div
                    className="flex-1 bg-cover bg-center w-full m-4 rounded-lg hidden lg:block"
                    style={{ backgroundImage: `url(${SignupPageSVG})` }}
                ></div>

                {/* Right Column for Content */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="max-w-3xl w-full space-y-2 p-10 rounded-lg">
                        {/* CareView logo */}
                        <div className="flex justify-start items-center">
                            <img
                                src={LogoSVG}
                                className="w-10 h-10 mr-2"
                                alt="logo"
                            />
                            <h1 className="text-2xl font-bold textPrimary">
                                CareView
                            </h1>
                        </div>
                        {/* Header */}
                        <div>
                            <h2 className="mt-5 text-3xl font-bold textPrimary">
                                Create your account
                            </h2>
                        </div>
                        {/* Signup form content */}
                        <form
                            className="mt-8 space-y-6"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="rounded-md shadow-sm flex flex-col gap-4">
                                <div className="flex md:flex-row gap-4 flex-col">
                                    <div className="md:w-1/2 w-full">
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium textPrimary mb-2"
                                        >
                                            First name
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 transition-all focus:z-10 sm:text-sm"
                                            placeholder="Youssef"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.firstName &&
                                            formik.errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formik.errors.firstName}
                                                </p>
                                            )}
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium textPrimary mb-2"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 transition-all focus:z-10 sm:text-sm"
                                            placeholder="Lawendy"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.lastName &&
                                            formik.errors.lastName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formik.errors.lastName}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium textPrimary mb-2"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 transition-all focus:z-10 sm:text-sm"
                                        placeholder="01063361951"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.phone &&
                                        formik.errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.phone}
                                            </p>
                                        )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium textPrimary mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 transition-all focus:z-10 sm:text-sm"
                                        placeholder="Example@example.com"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email &&
                                        formik.errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </p>
                                        )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium textPrimary mb-2"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 transition-all focus:z-10 sm:text-sm"
                                        placeholder="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.password &&
                                        formik.errors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.password}
                                            </p>
                                        )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-sm font-medium textPrimary mb-2"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 transition-all focus:z-10 sm:text-sm"
                                        placeholder="Re-enter password"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.confirmPassword &&
                                        formik.errors.confirmPassword && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.confirmPassword}
                                            </p>
                                        )}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-third"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-base font-medium textPrimary">
                            <span>Or Sign up with</span>
                        </div>
                        <div className="group relative w-full flex justify-center items-center py-4 px-4 border-2 border-borderSec text-sm font-medium rounded-md textPrimary bg-transparent">
                            <i className="fab fa-lg fa-google mr-4"></i>
                            Sign in with Google
                        </div>
                        <div className="text-center text-lg font-medium textPrimary">
                            <span className="textPrimary">
                                have an account?
                                <Link
                                    to={"/login"}
                                    className="textPrimary text_und ms-1"
                                >
                                    Login Here
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
