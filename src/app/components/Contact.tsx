"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { AlertCircle, CheckCircle } from "lucide-react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await sendEmail(data);
      if (response.status === "successful") {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage("An error occurred while sending the message.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="max-w-md" onSubmit={handleSubmit(onSubmit)}>
        {submitStatus === "success" && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded flex items-center">
            <CheckCircle className="mr-2" />
            <span>Your message has been sent successfully!</span>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded flex items-center">
            <AlertCircle className="mr-2" />
            <span>{errorMessage}</span>
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`w-full p-2 border rounded ${
              errors.name ? "border-red-500" : "border-primary"
            }`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-primary"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full p-2 border rounded ${
              errors.message ? "border-red-500" : "border-primary"
            }`}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2 rounded disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
