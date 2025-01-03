import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "@/Components/Footer/FooterSection.css"; // Import Vanilla CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="heading">Connect with me</p>
        <div className="social-icons">
          {/* Social Icons */}
          <Link
            href="https://github.com/iawais-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/awais-tahir-6a2898333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin size={24} />
          </Link>
          <div className="icon">
            <FaTwitter size={24} />
          </div>
        </div>
        <p className="copyright">
          &copy; 2025 Awais. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
