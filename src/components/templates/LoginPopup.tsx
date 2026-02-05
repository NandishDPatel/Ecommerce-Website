import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function LoginPopup({ showModal, setShowModal }: ModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Auto-hide error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }

    if (
      formData.email !== "testmail@mail.com" ||
      formData.password !== "Test@123"
    ) {
      setError(
        "Invalid credentials. Use the provided test email and password.",
      );
      return;
    }

    setSuccess("Login successful!");
    console.log("Login successful:", formData);

    setTimeout(() => {
      setShowModal(false);
      setSuccess("");
    }, 2000);
  };

  return (
    <>
      {/* Error Toast */}
      {error && (
        <div className="fixed top-6 right-6 z-[999]">
          <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <span className="text-sm font-medium">{error}</span>
            <button
              onClick={() => setError("")}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {success && (
        <div className="fixed top-6 right-6 z-[999]">
          <div className="bg-teal-400 text-white px-4 py-3 rounded-lg shadow-lg">
            {success}
          </div>
        </div>
      )}

      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-2xl">
          {/* Header */}
          <div className="relative flex justify-center border-b p-4">
            <div className="flex items-center text-2xl font-bold">
              <span className="bg-black text-white px-2 py-1 mr-1">E</span>
              <span>-Shoppy</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="ml-2 text-teal-500 text-sm"
              />
            </div>

            <FontAwesomeIcon
              icon={faClose}
              className="absolute right-3 top-3 cursor-pointer text-red-500 hover:bg-red-100 p-1 rounded"
              onClick={() => setShowModal(false)}
            />
          </div>

          {/* Body */}
          <div className="p-8">
            {/* Tabs */}
            <div className="flex bg-gray-200 p-1 mb-6">
              <button
                onClick={() => setActiveTab("signin")}
                className={`flex-1 py-2 text-sm font-medium transition ${
                  activeTab === "signin"
                    ? "bg-teal-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-2 text-sm font-medium transition ${
                  activeTab === "signup"
                    ? "bg-teal-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-gray-100 border focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 bg-gray-100 border focus:ring-2 focus:ring-teal-500 outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 transition"
              >
                {activeTab === "signin" ? "Sign In" : "Sign Up"}
              </button>
            </form>

            {/* Test Credentials */}
            <div className="text-xs text-gray-500 text-center mt-5">
              <p>
                <strong>Test Email:</strong> testmail@mail.com
              </p>
              <p>
                <strong>Test Password:</strong> Test@123
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
