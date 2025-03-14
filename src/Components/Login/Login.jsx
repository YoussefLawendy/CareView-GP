import React from "react";
import "./Login.css";
import LoginPageSVG from "../../assets/images/Login&Signup BG.svg";
import LogoSVG from "../../assets/images/Login&Signup Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Username or email is required")
                .test("email", "Invalid email or username", (value) => {
                    if (value.includes("@")) {
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); 
                    } else {
                        return /^[a-zA-Z0-9_.]{3,20}$/.test(value);
                    }
                }),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long")
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
                ),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    "http://localhost:5296/api/Account/Login",
                    {
                        email: values.email,
                        password: values.password,
                        rememberMe: values.rememberMe,
                    }
                );
        
                console.log("Login successful!", response.data);

                toast.success("Logged in successfully",{
                    position:"bottom-right",
                    duration: "200",
                })
                navigate("/home");
            } catch (error) {
                error.response.data.message
                    console.error("Server responded with an error:", error.response.data);
                    toast.error(error.response.data.message,{
                        position:"bottom-right",
                        duration: "500",
                    })
            }
        },
    });

    return (
        <>
            <div className="min-h-screen flex bg-bg">
                {/* Left Column for Content */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="max-w-3xl w-full space-y-8 p-10 rounded-lg">
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
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold textPrimary">
                                Welcome back!
                            </h2>
                            <h4 className="mt-2 text-xl font-medium textPrimary opacity-40">
                                Enter your details to join us
                            </h4>
                        </div>
                        <form
                            onSubmit={formik.handleSubmit}
                            className="mt-8 space-y-6"
                        >
                            <div className="rounded-md shadow-sm flex flex-col gap-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium textPrimary mb-4"
                                    >
                                        Username or Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Example@example.com"
                                        className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 focus:z-10 sm:text-sm"
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
                                        className="block text-sm font-medium textPrimary mb-4"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 focus:z-10 sm:text-sm"
                                        placeholder="Enter password"
                                    />
                                    {formik.touched.password &&
                                        formik.errors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.password}
                                            </p>
                                        )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        checked={formik.values.rememberMe}
                                        onChange={formik.handleChange}
                                        className="h-4 w-4 textPrimary"
                                    />
                                    <label
                                        htmlFor="rememberMe"
                                        className="ml-2 block text-sm textPrimary"
                                    >
                                        Remember me
                                    </label>
                                    {formik.touched.rememberMe &&
                                        formik.errors.rememberMe && (
                                            <p className="text-red-500 ml-2">
                                                {formik.errors.rememberMe}
                                            </p>
                                        )}
                                </div>

                                <div className="text-sm">
                                    <Link
                                        to={"/forgetpassword"}
                                        className="font-medium textPrimary hover:text_und"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-third"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-lg font-medium textPrimary">
                            <span>Or sign in with</span>
                        </div>
                        <div className="group relative w-full flex justify-center items-center py-4 px-4 border-2 border-borderSec text-sm font-medium rounded-md textPrimary bg-transparent">
                            <i className="fab fa-xl fa-google mr-4"></i>
                            Log in with Google
                        </div>
                        <div className="text-center text-lg font-medium textPrimary">
                            <span className="textPrimary">
                                Don’t have an account?{" "}
                                <Link
                                    to={"/signup"}
                                    className="textPrimary text_und ms-1"
                                >
                                    Signup
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column for Image */}
                <div
                    className="flex-1 bg-cover bg-center w-full m-4 rounded-lg hidden lg:block"
                    style={{ backgroundImage: `url(${LoginPageSVG})` }}
                ></div>
            </div>
        </>
    );
}
