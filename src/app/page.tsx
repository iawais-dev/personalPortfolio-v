// import AboutSection from "@/Components/About";
// import ContactSection from "@/Components/Contact";
// import Footer from "@/Components/Footer";
// import HeroSection from "@/Components/Hero";
import AboutSection from "@/Components/About/AboutSection";
import ContactSection from "@/Components/Contact/ContactSection";
import Footer from "@/Components/Footer/FooterSection";
import HeroSection from "@/Components/Hero/HeroSection";
import NavbarSection from "@/Components/Navbar/NavbarSection";
import Skills from "@/Components/Skills/SkillSection";
// import ProjectsSection from "@/Components/Project";
// import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="">
    <NavbarSection/>
     <HeroSection />
    <hr />
    <AboutSection/>
    <hr />
   {/*
    <hr />
    <ProjectsSection/>*/}
     <Skills/>
    <hr />
    <ContactSection/> 
    <Footer/>
    </div>
  );
}
