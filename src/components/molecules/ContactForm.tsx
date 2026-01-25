import React, { useState } from "react";
import Button from "../atoms/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-black p-5 md:p-10 shadow-2xl">
     
      <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-400 mb-1"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-2 py-1  border border-gray-500 text-white focus:outline-none focus:border-teal-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-400 mb-1"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border border-gray-500 text-white focus:outline-none focus:border-teal-400"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-gray-400 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-2 py-1 border border-gray-500 text-white focus:outline-none focus:border-teal-400"
            placeholder="+1 234 567 8901"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-bold text-gray-400 mb-1"
          >
            Subject <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border border-gray-500 text-white focus:outline-none focus:border-teal-400"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-400 mb-1"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-2 py-1 border border-gray-500 text-white focus:outline-none focus:border-teal-400 resize-vertical"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <Button name="Send Message"/>
      </form>
    </div>
  );
};

export default ContactForm;
