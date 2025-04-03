import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import BGImage from "../../assets/images/HeroSectionBG.svg";
import SkeletonImage from "../../assets/images/Skeleton.svg";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="flex min-h-screen bg-bg">
                {/* Sidebar */}
                <div
                    className={`transition-all duration-300 ${
                        isSidebarOpen ? "w-10" : "w-20"
                    }`}
                >
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                </div>

                {/* Main Content */}
                <div
                    className={`flex-1 transition-all duration-300 ${
                        isSidebarOpen ? "ml-60" : "ml-0"
                    } p-8`}
                >
                    {/* Sections */}
                    {/* Home Section */}
                    <section id="home" className=" mb-8 mt-0">
                        {/* Hero Section */}
                        <div className="bg-secondary text-bg p-12 rounded-lg relative overflow-hidden lg:overflow-visible min-h-[50vh] flex items-start">
                            {/* Background Image */}
                            <img
                                src={BGImage}
                                className="absolute inset-0 w-full h-full object-cover opacity-50" // Adjust opacity as needed
                                alt="background"
                            />

                            {/* Skeleton Image Floating on the Right */}
                            <div className="absolute right-0 top-0 lg:h-[150%] opacity-[20%] lg:opacity-100 flex items-center pr-12 translate-y-[10%]">
                                <img
                                    src={SkeletonImage}
                                    className="h-full w-auto" // Adjust size as needed
                                    alt="Skeleton"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="relative z-10">
                                {/* Main Heading */}
                                <h1 className="text-5xl font-bold mb-12 w-2/3">
                                    Welcome to CareView: The Future of Smart
                                    Healthcare
                                </h1>

                                {/* Subheading */}
                                <p className="mb-28 text-2xl font-medium w-2/3">
                                    An intelligent medical platform designed to
                                    assist doctors and patients in diagnosing,
                                    recommending treatments, and monitoring
                                    recovery.
                                </p>

                                {/* Call to Action */}
                                <p className="text-xl font-bold mb-20">
                                    Ready to experience the future of medical
                                    AI?
                                    <span className="block">
                                        Login now and transform the way
                                        healthcare is delivered!
                                    </span>
                                </p>

                                {/* Buttons */}
                                <div className="flex space-x-4">
                                    {/* Login Button */}
                                    <Link
                                        to="/login"
                                        className="bg-bg text-secondary px-20 py-5 rounded-lg font-bold text-xl"
                                    >
                                        Login
                                    </Link>

                                    {/* Sign Up Button */}
                                    <Link
                                        to="/signup"
                                        className="bg-transparent text-bg w-max border-bg border-2 rounded-lg px-20 py-5 font-bold text-xl hover:bg-bg hover:text-secondary transition duration-300"
                                    >
                                        Sign Up
                                    </Link>
                                </div>

                                {/* Footer Note */}
                                <p className="mt-28 text-lg font-light">
                                    Powered by AI
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Features Section */}
                    <section id="features" className="min-h-screen mb-8">
                        <h2 className="text-xl font-bold mb-4">
                            Features Section
                        </h2>
                        <p>This is the features section content.</p>
                    </section>
                    {/* About Section */}
                    <section id="about" className="min-h-screen mb-8">
                        <h2 className="text-xl font-bold mb-4">
                            About Us Section
                        </h2>
                        <p>This is the about us section content.</p>
                    </section>
                    {/* Contact Section */}
                    <section id="contact" className="min-h-screen mb-8">
                        <h2 className="text-xl font-bold mb-4">
                            Contact Section
                        </h2>
                        <p>This is the contact section content.</p>
                    </section>
                </div>
            </div>
        </>
    );
}
