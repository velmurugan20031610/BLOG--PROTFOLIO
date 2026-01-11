import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";

import ProfileImg from "../assets/WhatsApp Image 2026-01-12 at 1.23.16 AM.jpeg";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import DB from "../assets/data-server.png";
import NODE from "../assets/node-js.png";
import BlogImage from "../assets/blogImage.png";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-white">

            {/* ================= HERO SECTION ================= */}
            {/* HERO SECTION */}
            <section className="pt-20 px-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    {/* IMAGE (TOP ON MOBILE, RIGHT ON DESKTOP) */}
                    <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 md:order-2">
                        <img
                            src={ProfileImg}
                            alt="Velmurugan"
                            className="w-40 sm:w-48 md:w-[420px] rounded-2xl shadow-2xl border"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
                        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold">
                            Hi! I Am
                        </h2>

                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-orange-400 mt-2">
                            Velmurugan M
                        </h1>

                        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
                            I am a Full Stack Developer who builds real-time and responsive web
                            applications using modern technologies.
                        </p>

                        <button
                            className="mt-6 bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
                            onClick={() => navigate("/contact")}
                        >
                            Hire Me
                        </button>
                    </div>

                </div>
            </section>


            {/* ================= SKILLS ================= */}
            <section className="py-10">
                <div className="flex flex-wrap justify-center gap-10">
                    <img src={HTML} alt="HTML" className="w-12" />
                    <img src={CSS} alt="CSS" className="w-12" />
                    <img src={JS} alt="JS" className="w-12" />
                    <img src={REACTICON} alt="React" className="w-12" />
                    <img src={DB} alt="MongoDB" className="w-12" />
                    <img src={NODE} alt="Node" className="w-12" />
                </div>
            </section>

            {/* ================= EXPERIENCE ================= */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">

                    <div className="flex flex-col gap-6">
                        <div className="border-4 border-purple-400 p-6 rounded-xl text-center w-60">
                            <div className="text-white bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-xl">
                                10+
                            </div>
                            <p className="mt-2 font-medium">Projects Completed</p>
                        </div>

                        <div className="border-4 border-green-400 p-6 rounded-xl text-center w-60">
                            <div className="text-white bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-xl">
                                1+
                            </div>
                            <p className="mt-2 font-medium">Years of Experience</p>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold">
                            My Awesome
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold text-orange-400">
                            Services
                        </h2>
                        <p className="text-gray-600 max-w-md mt-4">
                            I build full-stack, responsive and real-time web applications using
                            React, Node.js and MongoDB.
                        </p>

                        <button
                            onClick={() => navigate("/projects")}
                            className="mt-6 bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
                        >
                            View Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= LIVE PROJECTS ================= */}
            <section className="py-20">
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
                    My <span className="text-orange-400">Live Projects</span> 🚀
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

                    <ProjectCard
                        title="Bulk Mail Application"
                        desc="Bulk email sending application built with React and Node.js."
                        link="https://lnkd.in/gERb-UYY"
                    />

                    <ProjectCard
                        title="Weather Application"
                        desc="Real-time weather app using public API integration."
                        link="https://weather-eosin-five.vercel.app/"
                    />

                    <ProjectCard
                        title="Task Management App"
                        desc="Task management system with CRUD operations."
                        link="https://lnkd.in/dTB9nYMw"
                    />

                    <div className="border rounded-xl p-6 shadow bg-white">
                        <h3 className="text-xl font-semibold mb-2">
                            Movie App (Netflix UI)
                        </h3>
                        <p className="text-gray-600">
                            Netflix-style movie browsing UI with authentication.
                        </p>
                        <p className="text-gray-400 mt-2 italic">
                            Live demo available
                        </p>
                    </div>

                </div>

                <p className="text-center text-gray-600 mt-10">
                    And many more mini projects built using modern full-stack technologies.
                </p>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">

                    <div className="hidden md:block">
                        <img src={BlogImage} alt="Projects" className="w-96" />
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold">
                            I Love Building
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold text-orange-400">
                            Real Applications
                        </h2>

                        <p className="text-gray-600 max-w-md mt-4">
                            Explore my real-world projects developed using full-stack
                            technologies.
                        </p>

                        <button
                            onClick={() => navigate("/projects")}
                            className="mt-6 bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
                        >
                            Explore Projects
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

/* PROJECT CARD COMPONENT */
function ProjectCard({ title, desc, link }) {
    return (
        <div className="border rounded-xl p-6 shadow bg-white">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{desc}</p>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium underline"
            >
                View Live Project
            </a>
        </div>
    );
}

export default Home;
