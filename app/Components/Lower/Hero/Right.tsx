"use client";

import Link from "next/link";
import ContactForm from "../../ContactForm";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Right() {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm((prev) => !prev); // Toggle the form
  };

  return (
    <div className="bg-[#afadae] flex px-16 justify-end">
      <div className="flex flex-col w-fit my-auto transition-all duration-500">
        <AnimatePresence>
          {showForm && (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>

        <Link
          href="#workSection"
          className="text-slate-800 text-[6rem] tracking-tighter font-bold leading-none w-fit hover:text-slate-700 transition-all duration-150"
        >
          check out my work
        </Link>
        <button
          onClick={handleContactClick}
          className="text-white leading-none text-[6rem] tracking-tighter font-bold w-full text-start hover:text-slate-200 transition-all duration-150"
        >
          contact
        </button>
      </div>
    </div>
  );
}
