"use client";

import { X } from "lucide-react";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactPopup({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[var(--bg)] w-full max-w-lg mx-4 rounded-2xl shadow-xl p-6 max-h-[94vh] ">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          <X size={20} />
        </button>

        <ContactForm />
      </div>
    </div>
  );
}
