"use client";

import Link from "next/link";
import ContactForm from "../../ContactForm";
import { useState } from "react";

export default function Right() {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm(true);
  };
  return (
    <div className="bg-[#afadae] flex px-16 justify-end">
      <div className="flex flex-col w-fit my-auto">
        {showForm && <ContactForm></ContactForm>}
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
