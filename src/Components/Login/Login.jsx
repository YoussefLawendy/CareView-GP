import React, { useState } from "react";
import "./Login.css";
import LoginPageSVG from "../../assets/images/Login&Signup BG.svg";
import LogoSVG from "../../assets/images/Login&Signup Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";

export default function Login() {
    // Navigation hook for redirecting
    const navigate = useNavigate();

    // State for password visibility toggle
    const [showPassword, setShowPassword] = useState(false);

    // Formik configuration for form handling and validation
    const formik = useFormik({
        // Initial form values
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },

        // Validation schema using Yup
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Username or email is required")
                .test("email", "Invalid email or username", (value) => {
                    // Validate as email if contains @, otherwise validate as username
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

        // Form submission handler
        onSubmit: async (values) => {
            try {
                // API call to login endpoint
                const response = await axios.post(
                    "http://localhost:5296/api/Account/Login",
                    {
                        email: values.email,
                        password: values.password,
                        rememberMe: values.rememberMe,
                    }
                );

                console.log("Login successful!", response.data);
                // Show success toast notification
                toast.success("Logged in successfully", {
                    position: "bottom-right",
                    duration: 2000, // 2 seconds
                });

                // Redirect to home page after successful login
                navigate("/home");
            } catch (error) {
                console.error(
                    "Login failed:",
                    error.response?.data || error.message
                );
                // Show error toast notification
                toast.error(error.response?.data?.message || "Login failed", {
                    position: "bottom-right",
                    duration: 5000, // 5 seconds
                });
            }
        },
    });

    return (
        <>
            <div className="min-h-screen flex bg-bg">
                {/* Left Column - Form Content */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="max-w-3xl w-full space-y-8 p-10 rounded-lg">
                        {/* Logo Section */}
                        <div className="flex justify-start items-center">
                            <img
                                src={LogoSVG}
                                className="w-10 h-10 mr-2"
                                alt="CareView logo"
                            />
                            <h1 className="text-2xl font-bold textPrimary">
                                CareView
                            </h1>
                        </div>

                        {/* Form Header */}
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold textPrimary">
                                Welcome back!
                            </h2>
                            <h4 className="mt-2 text-xl font-medium textPrimary opacity-40">
                                Enter your details to join us
                            </h4>
                        </div>

                        {/* Main Form */}
                        <form
                            onSubmit={formik.handleSubmit}
                            className="mt-8 space-y-6"
                        >
                            <div className="rounded-md shadow-sm flex flex-col gap-4">
                                {/* Email/Username Field */}
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
                                    {/* Validation Error Message */}
                                    {formik.touched.email &&
                                        formik.errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </p>
                                        )}
                                </div>

                                {/* Password Field with Toggle */}
                                <div className="relative">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium textPrimary mb-4"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="appearance-none relative block w-full px-4 py-3 border-2 border-borderSec textPrimary bg-transparent rounded-lg focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-40 focus:z-10 sm:text-sm pr-10"
                                            placeholder="Enter password"
                                        />
                                        {/* Password Visibility Toggle Button */}
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            aria-label={
                                                showPassword
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                        >
                                            {showPassword ? (
                                                <Icon
                                                    icon="bxs:hide"
                                                    width="20"
                                                    height="20"
                                                    className="text-gray-500"
                                                />
                                            ) : (
                                                <Icon
                                                    icon="mdi:show"
                                                    width="20"
                                                    height="20"
                                                    className="text-gray-500"
                                                />
                                            )}
                                        </button>
                                    </div>
                                    {/* Validation Error Message */}
                                    {formik.touched.password &&
                                        formik.errors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formik.errors.password}
                                            </p>
                                        )}
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password Section */}
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
                                </div>

                                <div className="text-sm">
                                    <Link
                                        to={"/forgetpassword"}
                                        className="font-medium textPrimary hover:text_und transition-colors"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-third transition-colors"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        {/* Social Login Section */}
                        <div className="text-center text-lg font-medium textPrimary">
                            <span>Or sign in with</span>
                        </div>
                        <div className="group relative w-full flex justify-center items-center py-4 px-4 border-2 border-borderSec text-sm font-medium rounded-md textPrimary bg-transparent hover:bg-gray-50 transition-colors cursor-pointer">
                            <i className="fab fa-xl fa-google mr-4"></i>
                            Log in with Google
                        </div>

                        {/* Signup Link */}
                        <div className="text-center text-lg font-medium textPrimary">
                            <span className="textPrimary">
                                Don't have an account?{" "}
                                <Link
                                    to={"/signup"}
                                    className="textPrimary text_und ms-1 hover:text-secondary transition-colors"
                                >
                                    Signup
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Decorative Image */}
                <div
                    className="flex-1 bg-cover bg-center w-full m-4 rounded-lg hidden lg:block"
                    style={{ backgroundImage: `url(${LoginPageSVG})` }}
                ></div>
            </div>
        </>
    );
}
