import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";
import { auth } from "../config/firebase";

const API_BASE = "https://blog-portfolio-backend-ejy4.onrender.com";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [admin, setAdmin] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [projectLink, setProjectLink] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const unsub = auth.onAuthStateChanged((user) => {
      if (user && user.uid === "QyBafva6X6c9vqVOKIlIj8NYX6H2") {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    });

    fetchProjects();
    return () => unsub();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/blogs`);
      setProjects(res.data);
    } catch (err) {}
  };

  const handleLike = async (id) => {
    try {
      await axios.patch(`${API_BASE}/api/blogs/like/${id}`);
      fetchProjects();
    } catch (err) {}
  };

  const handleAddProject = async (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    try {
      await axios.post(`${API_BASE}/api/blogs`, {
        newTitle,
        newContent,
        projectLink,
        date,
        likes: 0,
      });

      setNewTitle("");
      setNewContent("");
      setProjectLink("");
      fetchProjects();
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-10 py-20 mt-20">
      <h2 className="text-center text-3xl sm:text-5xl font-bold mb-12">
        My <span className="text-orange-400">Projects</span>
      </h2>

      {admin && (
        <div className="max-w-md sm:max-w-2xl mx-auto bg-white p-6 rounded-lg shadow mb-14">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Add New Project
          </h3>

          <form onSubmit={handleAddProject} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Project Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              className="p-2 border rounded"
            />

            <textarea
              placeholder="Project Description"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows="4"
              required
              className="p-2 border rounded"
            />

            <input
              type="url"
              placeholder="Project Link"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              required
              className="p-2 border rounded"
            />

            <button className="bg-orange-400 text-white py-2 rounded hover:bg-orange-600">
              Add Project
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {project.newTitle}
              </h3>

              <p className="text-xs text-gray-500 mb-2">
                {project.date}
              </p>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {project.newContent}
              </p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
              >
                View
              </a>

              <button
                className="text-blue-600 text-sm font-medium"
                onClick={() => handleLike(project._id)}
              >
                👍 {project.likes}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
