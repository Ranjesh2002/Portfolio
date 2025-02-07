import { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Reset error message if the email is valid
    setEmailError("");

    console.log("Form submitted:", formData);

    // Simulate form submission logic here

    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setFormSubmitted(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16  text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/3 mb-8 md:mb-0 mx-auto">
          <h2 className="text-5xl font-bold mb-9 hover:text-[#ff1f6b] transition-colors duration-300 ease-in-out mx-1">
            Contact Me
          </h2>
          <div className="mb-4 flex items-center gap-3 px-7">
            <MdEmail className="text-pink-500" />{" "}
            <span>rs0036870@gmail.com</span>
          </div>
          <div className="mb-4 flex items-center gap-3 px-7">
            <MdPhone className="text-pink-500" /> <span>+977 9823495888</span>
          </div>
          <div className="flex gap-4 text-2xl px-7">
            <FaTwitter className="text-[#f2ecec] text-[1.5rem] transition-colors duration-300 ease-in-out hover:text-[#ff1f6b]" />
            <FaInstagram className="text-[#f2ecec] text-[1.5rem] transition-colors duration-300 ease-in-out hover:text-[#ff1f6b]" />
            <FaLinkedinIn className="text-[#f2ecec] text-[1.5rem] transition-colors duration-300 ease-in-out hover:text-[#ff1f6b]" />
          </div>
          <div className="mx-7">
            <button className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white px-8 py-1.5 rounded-[10px] border-none cursor-pointer font-semibold tracking-[0.5px] transition-all duration-300 shadow-lg my-9 hover:transform hover:translate-y-[-2px] hover:shadow-2xl">
              <a
                href="/Portfolio/images/Ranjesh.pdf"
                download="Ranjesh_Thakur_CV.pdf"
              >
                <FaDownload /> Download CV
              </a>
            </button>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded focus:outline-none focus:border-blue-500"
                required
              />
              {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded h-32 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white px-7 py-3 rounded-[10px] border-none cursor-pointer font-semibold tracking-[0.5px] transition-all duration-300 shadow-lg hover:transform hover:translate-y-[-2px] hover:shadow-2xl"
            >
              Submit
            </button>
          </form>
          {formSubmitted && (
            <div className="mt-4 text-green-500 text-center">
              <p>Form submitted successfully! Thank you for your message.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
