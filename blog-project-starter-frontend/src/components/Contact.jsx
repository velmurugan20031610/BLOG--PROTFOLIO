import React, { useState } from "react";
import axios from "axios"; 

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(""); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { // ✅ async
    e.preventDefault();

    try {
      await axios.post("https://blog-portfolio-backend-ejy4.onrender.com/api/blogs", form); 

      setSuccess("Message sent successfully ✅"); 
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-14 px-6">
      <h2 className="text-center text-4xl font-bold mb-10">
        Contact <span className="text-orange-400">Me</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        {success && (
          <p className="text-green-600 text-center">{success}</p> // 
        )}

        <button className="bg-orange-400 text-white py-2 rounded hover:bg-orange-600">
          Send Message
        </button>

        <div className="text-center mt-4 text-gray-700">
          <p><strong>Email:</strong> velmurugan2003@gmail.com</p>
          <p className="mt-2">
            <a
              href="https://github.com/velmurugan20031610"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://www.linkedin.com/in/vela-m-54b941315/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Contact;
