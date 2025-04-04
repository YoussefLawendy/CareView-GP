import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import BGImage from "../../assets/images/HeroSectionBG.svg";
import SkeletonImage from "../../assets/images/Skeleton.svg";
import WebsiteBG from "../../assets/images/WebsiteBG.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import LogoSVG from "../../assets/images/LogoWithName.svg";
import Footer from "../Footer/Footer.jsx";

export default function LandPage() {
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
                    className={`flex-1 bg-WebsiteBG  bg-contain transition-all duration-300 ${
                        isSidebarOpen ? "ml-60" : "ml-0"
                    }`}
                >
                    {/* Home Section */}
                    <section id="home" className="mb-8 mt-0 p-8">
                        {/* Hero Section */}
                        <div className="bg-secondary text-bg p-12 rounded-lg relative overflow-hidden lg:overflow-visible min-h-[50vh] flex items-start">
                            {/* Background Image */}
                            <img
                                src={BGImage}
                                className="absolute inset-0 w-full h-full object-cover opacity-50"
                                alt="background"
                            />

                            {/* Skeleton Image Floating on the Right */}
                            <div
                                className="absolute right-0 top-0 
                                lg:h-[150%] opacity-[20%]
                                lg:opacity-100 flex items-center translate-y-[10%]"
                            >
                                <img
                                    src={SkeletonImage}
                                    className="h-full w-auto"
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
                    <section id="features" className="relative pt-8 pb-20">
                        <div className="px-8 my-8">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-extrabold mb-4 text-third">
                                    Our Powerful Features
                                </h2>
                                <p className="text-xl text-third font-bold max-w-3xl mx-auto">
                                    Discover how CareView revolutionizes
                                    healthcare with AI-powered solutions
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                                {/* Card 1 - AI-Powered X-ray Analysis */}
                                <div className="flex justify-center">
                                    <div className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-150 max-w-md w-full group">
                                        <div className="p-6 text-center">
                                            <div className="bg-primary rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center group-hover:bg-third transition-all duration-150">
                                                <div className="border-4 border-third w-24 h-24 rounded-full flex items-center justify-center group-hover:border-primary transition-all duration-150">
                                                    <Icon
                                                        icon="mdi:x-ray-box"
                                                        width="60"
                                                        height="60"
                                                        className="text-third mx-auto group-hover:text-primary transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-extrabold mb-2 text-third">
                                                AI-Powered X-ray Analysis
                                            </h3>
                                            <p className="text-third text-xl mt-3">
                                                Upload X-ray images and receive
                                                instant AI-driven diagnoses and
                                                treatment recommendations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 - Smart Hospital & Clinic Finder */}
                                <div className="flex justify-center">
                                    <div className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-150 max-w-md w-full group">
                                        <div className="p-6 text-center">
                                            <div className="bg-primary rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center group-hover:bg-third transition-all duration-150">
                                                <div className="border-4 border-third w-24 h-24 rounded-full flex items-center justify-center group-hover:border-primary transition-all duration-150">
                                                    <Icon
                                                        icon="healthicons:pharmacy-24px"
                                                        width="60"
                                                        height="60"
                                                        className="text-third mx-auto group-hover:text-primary transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-extrabold mb-2 text-third">
                                                Smart Pharmacy Finder
                                            </h3>
                                            <p className="text-third text-xl mt-3">
                                                Find nearby pharmacies by
                                                location, medicine availability,
                                                24/7 service, user reviews, and
                                                stock updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for skeleton leg */}
                                <div className="hidden lg:block"></div>

                                {/* Card 3 - Post-Treatment Monitoring */}
                                <div className="flex justify-center">
                                    <div className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-150 max-w-md w-full group">
                                        <div className="p-6 text-center">
                                            <div className="bg-primary rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center group-hover:bg-third transition-all duration-150">
                                                <div className="border-4 border-third w-24 h-24 rounded-full flex items-center justify-center group-hover:border-primary transition-all duration-150">
                                                    <Icon
                                                        icon="ic:baseline-monitor-heart"
                                                        width="60"
                                                        height="60"
                                                        className="text-third mx-auto group-hover:text-primary transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-extrabold mb-2 text-third">
                                                Post-Treatment Monitoring
                                            </h3>
                                            <p className="text-third text-xl mt-3">
                                                Upload physical therapy videos,
                                                track progress, and receive
                                                real-time feedback on movement
                                                accuracy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4 - Personalized Treatment Suggestions */}
                                <div className="flex justify-center">
                                    <div className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-150 max-w-md w-full group">
                                        <div className="p-6 text-center">
                                            <div className="bg-primary rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center group-hover:bg-third transition-all duration-150">
                                                <div className="border-4 border-third w-24 h-24 rounded-full flex items-center justify-center group-hover:border-primary transition-all duration-150">
                                                    <Icon
                                                        icon="solar:jar-of-pills-bold"
                                                        width="60"
                                                        height="60"
                                                        className="text-third mx-auto group-hover:text-primary transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-extrabold mb-2 text-third">
                                                Personalized Treatment
                                            </h3>
                                            <p className="text-third text-xl mt-3">
                                                AI-driven recommendations
                                                tailored to each patient's
                                                condition.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 5 - Secure & Compliant */}
                                <div className="flex justify-center">
                                    <div className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-150 max-w-md w-full group">
                                        <div className="p-6 text-center">
                                            <div className="bg-primary rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center group-hover:bg-third transition-all duration-150">
                                                <div className="border-4 border-third w-24 h-24 rounded-full flex items-center justify-center group-hover:border-primary transition-all duration-150">
                                                    <Icon
                                                        icon="tabler:shield-check-filled"
                                                        width="60"
                                                        height="60"
                                                        className="text-third mx-auto group-hover:text-primary transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-extrabold mb-2 text-third">
                                                Secure & Compliant
                                            </h3>
                                            <p className="text-third text-xl mt-3">
                                                We prioritize patient data
                                                security, ensuring compliance
                                                with medical privacy
                                                regulations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="mb-8 mt-0 p-8">
                        <div className="bg-secondary text-bg p-12 rounded-lg relative overflow-hidden min-h-[50vh]">
                            <div className="relative z-10 max-w-6xl mx-auto">
                                {/* Who We Are */}
                                <div className="text-center mb-16">
                                    <h2 className="text-5xl font-extrabold mb-4 text-white">
                                        Who We Are
                                    </h2>
                                    <p className="text-xl text-gray-100 font-medium max-w-3xl mx-auto">
                                        Revolutionizing healthcare with
                                        AI-powered X-ray diagnostics,
                                        personalized hospital & pharmacy
                                        recommendations, and seamless
                                        post-treatment monitoring.
                                    </p>
                                </div>

                                {/* Our Mission */}
                                <div className="mb-16 p-8 bg-white bg-opacity-90 rounded-xl backdrop-blur-sm">
                                    <h3 className="text-3xl font-bold mb-6 text-center text-secondary">
                                        Our Mission
                                    </h3>
                                    <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
                                        Empowering doctors and patients with
                                        cutting-edge AI tools for faster, more
                                        accurate diagnoses and highly
                                        personalized treatment guidance.
                                    </p>
                                </div>

                                {/* Why Choose Us? */}
                                <div className="mb-16">
                                    <h3 className="text-3xl font-bold mb-8 text-center text-white">
                                        Why Choose Us?
                                    </h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {/* Feature Cards */}
                                        {[
                                            {
                                                icon: "healthicons:artificial-intelligence",
                                                title: "AI-Powered Diagnoses",
                                                desc: "Instant, accurate medical insights",
                                            },
                                            {
                                                icon: "mdi:chart-timeline-variant",
                                                title: "Post-Treatment Monitoring",
                                                desc: "AI-driven progress tracking",
                                            },
                                            {
                                                icon: "mdi:pharmacy",
                                                title: "Smart Pharmacy Finder",
                                                desc: "Find 24/7 pharmacies with real-time stock updates",
                                            },
                                            {
                                                icon: "mdi:shield-lock",
                                                title: "Secure & Compliant",
                                                desc: "HIPAA & GDPR protected for full privacy",
                                            },
                                        ].map(
                                            ({ icon, title, desc }, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white bg-opacity-90 backdrop-blur-sm text-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                                                >
                                                    <div className="mb-4 flex justify-center">
                                                        <Icon
                                                            icon={icon}
                                                            className="text-5xl text-secondary"
                                                            width="48"
                                                            height="48"
                                                        />
                                                    </div>
                                                    <h4 className="text-xl font-semibold mb-2 text-center">
                                                        {title}
                                                    </h4>
                                                    <p className="text-gray-600 text-center">
                                                        {desc}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Our Partners */}
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold mb-8 text-white">
                                        Our Partners
                                    </h3>
                                    <p className="text-lg text-gray-100 mb-8">
                                        Trusted by top healthcare institutions.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-8">
                                        {[
                                            "Partner 1",
                                            "Partner 2",
                                            "Partner 3",
                                        ].map((partner, i) => (
                                            <div
                                                key={i}
                                                className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg w-40 h-24 flex items-center justify-center shadow-md"
                                            >
                                                <span className="font-bold text-gray-700">
                                                    {partner}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section
                        id="contact"
                        className="min-h-screen mb-8 p-8 w-3/4 mx-auto"
                    >
                        {/* Centered Headline Section */}
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-extrabold mb-4 text-secondary">
                                Contact Us
                            </h2>
                            <p className="text-xl text-secondary font-medium max-w-3xl mx-auto">
                                We're here to help with any questions
                            </p>
                        </div>

                        <div className="mx-auto flex flex-col md:flex-row gap-8 items-center">
                            {/* Logo on Left (shown on medium+ screens) */}
                            <div className="hidden md:block">
                                <img
                                    src={LogoSVG}
                                    className="w-48 h-48"
                                    alt="Company Logo"
                                />
                            </div>

                            {/* Contact Form */}
                            <div className="flex-1 bg-primary p-8 rounded-xl shadow-md">
                                <form>
                                    {/* Name Field */}
                                    <div className="mb-6">
                                        <label
                                            htmlFor="name"
                                            className="block text-base font-bold text-secondary mb-2"
                                        >
                                            Enter Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-0 focus:border-third focus:outline-none transition-all text-primary"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block text-base font-bold text-secondary mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-0 focus:border-third focus:outline-none transition-all text-primary"
                                            placeholder="example@company.com"
                                        />
                                    </div>

                                    {/* Description Field */}
                                    <div className="mb-8">
                                        <label
                                            htmlFor="description"
                                            className="block text-base font-bold text-secondary mb-2"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows="4"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-0 focus:border-third focus:outline-none transition-all text-primary"
                                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-third transition-colors"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    );
}
