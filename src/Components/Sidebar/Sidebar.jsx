import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import LogoSVG from "../../assets/images/Login&Signup Logo.svg";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "features", "about", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 100) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`bg-primary text-textPrimary ${
                isSidebarOpen ? "w-64" : "w-20"
            } py-7 px-2 fixed inset-y-0 left-0 transition-all duration-300`}
        >
            {/* Logo and CareView Text */}
            <div
                className="text-textPrimary flex items-center space-x-2 px-4 mb-12 cursor-pointer"
                onClick={toggleSidebar}
            >
                <img src={LogoSVG} className="w-8 h-8 mr-2" alt="logo" />
                {isSidebarOpen && (
                    <span className="text-xl font-extrabold">CareView</span>
                )}
            </div>

            {/* Sidebar Links */}
            <nav className="space-y-6 relative">
                {["home", "features", "about", "contact"].map((section) => (
                    <Link
                        key={section}
                        to={`#${section}`}
                        onClick={() => handleClick(section)}
                        className="flex items-center py-2.5 px-4 font-bold rounded transition duration-200 relative overflow-hidden"
                    >
                        {/* Background Animation */}
                        <div
                            className={`absolute inset-y-0 left-0 bg-secondary transition-all duration-500 ease-in-out ${
                                activeSection === section ? "w-full" : "w-0"
                            }`}
                            style={{ zIndex: -1 }}
                        ></div>

                        {/* Icon */}
                        <Icon
                            icon={
                                section === "home"
                                    ? "tabler:home-filled"
                                    : section === "features"
                                    ? "solar:stars-bold-duotone"
                                    : section === "about"
                                    ? "clarity:group-solid"
                                    : "fluent:call-12-filled"
                            }
                            width="24"
                            height="24"
                            className={`transition-colors duration-200 ${
                                activeSection === section
                                    ? "text-bg"
                                    : "text-third"
                            }`}
                        />

                        {/* Text (Conditionally Rendered) */}
                        {isSidebarOpen && ( // Show text only if sidebar is open
                            <span
                                className={`ml-8 transition-colors duration-200 ${
                                    activeSection === section
                                        ? "text-bg"
                                        : "text-third"
                                }`}
                            >
                                {section === "home"
                                    ? "Home"
                                    : section === "features"
                                    ? "Features"
                                    : section === "about"
                                    ? "About Us"
                                    : "Contact"}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
