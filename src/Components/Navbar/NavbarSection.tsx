// NavbarSection.tsx
"use client";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/Components/Navbar/NavbarSection.css";

const NavbarSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            <div className="logo">
              <Link href="/">Awais<span>Dev</span></Link>
            </div>

            <div className="desktop-menu">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="mobile-menu-button">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-toggle"
              >
                {isOpen ? <IoMdClose /> : <RiMenu3Line />}
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {isScrolled && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default NavbarSection;
