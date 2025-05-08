import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

// Social link component for better organization
const SocialLink = ({ icon: Icon, href, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-white hover:text-pink-500 transition-colors duration-300"
  >
    <Icon className="text-2xl" />
  </a>
);

SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim()) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter your name.",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!formData.message.trim()) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a message.",
      });
      return;
    }

    // Reset error message
    setFormStatus({
      submitted: false,
      error: false,
      message: "",
    });

    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);

      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for your message! I'll get back to you soon.",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (formStatus.error) {
      setFormStatus({
        submitted: false,
        error: false,
        message: "",
      });
    }
  };

  // Contact information data
  const contactInfo = {
    email: "rs0036870@gmail.com",
    phone: "+977 9823495888",
    socialLinks: [
      {
        icon: FaTwitter,
        url: "https://twitter.com/yourhandle",
        label: "Twitter profile",
      },
      {
        icon: FaInstagram,
        url: "https://instagram.com/yourhandle",
        label: "Instagram profile",
      },
      {
        icon: FaLinkedinIn,
        url: "https://linkedin.com/in/yourprofile",
        label: "LinkedIn profile",
      },
    ],
    resumeUrl: "/Portfolio/images/Ranjesh.pdf",
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-5xl font-bold mb-9 hover:text-pink-500 transition-colors duration-300 ease-in-out">
            Contact Me
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MdEmail className="text-pink-500 text-xl" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-pink-300 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-pink-500 text-xl" />
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="hover:text-pink-300 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="flex gap-6 items-center">
              {contactInfo.socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  icon={social.icon}
                  href={social.url}
                  ariaLabel={social.label}
                />
              ))}
            </div>

            <div>
              <a
                href={contactInfo.resumeUrl}
                download="Ranjesh_Thakur_CV.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-lg font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <FaDownload className="text-white" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-2/3 w-full">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-5">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-7 py-3 rounded-lg border-none cursor-pointer font-semibold tracking-wide transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {formStatus.message && (
              <div
                className={`mt-4 p-3 rounded-lg text-center ${
                  formStatus.error
                    ? "bg-red-900/40 text-red-300"
                    : "bg-green-900/40 text-green-300"
                }`}
              >
                <p>{formStatus.message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
