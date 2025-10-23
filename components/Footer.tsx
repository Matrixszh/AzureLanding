
"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black">


      {/* Bottom Bar */}
      <div className=" mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Zhoton. All rights reserved.</p>
          <p>Zhtoton Technologies LLC</p>
        </div>
      </div>
    </footer>
  );
}
