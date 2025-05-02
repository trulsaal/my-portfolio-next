// components/ContactForm.jsx
"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89e46ho", // replace with your service ID
        "template_04ytriu", // replace with your template ID
        form.current!,
        "7_Lth9dab2rFh5QRQ" // replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col space-y-4 p-4 bg-white rounded-xl shadow-xl"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Ditt navn"
        required
        className="p-2 border rounded"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Din e-post"
        required
        className="p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Din melding"
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-slate-800 text-white p-2 rounded hover:bg-slate-700"
      >
        Send
      </button>
    </form>
  );
}
