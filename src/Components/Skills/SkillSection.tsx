import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGem, FaCube } from "react-icons/fa";


const Skills = () => {
    return (
        <div className="skills-container">
            <div className="content-wrapper">
                <h2 className="skills-title">MY Skills</h2>
                <div className="skills-grid">
                    <div className="skill-card html">
                        <div className="icon-wrapper">
                            <FaHtml5 className="icon" />
                        </div>
                        <h3 className="skill-title">HTML</h3>
                        <div className="progress-bar">
                            <div className="progress html"></div>
                        </div>
                    </div>

                    <div className="skill-card css">
                        <div className="icon-wrapper">
                            <FaCss3Alt className="icon" />
                        </div>
                        <h3 className="skill-title">CSS</h3>
                        <div className="progress-bar">
                            <div className="progress css"></div>
                        </div>
                    </div>

                    <div className="skill-card js">
                        <div className="icon-wrapper">
                            <FaJs className="icon" />
                        </div>
                        <h3 className="skill-title">JavaScript</h3>
                        <div className="progress-bar">
                            <div className="progress js"></div>
                        </div>
                    </div>

                    <div className="skill-card react">
                        <div className="icon-wrapper">
                            <FaReact className="icon" />
                        </div>
                        <h3 className="skill-title">React</h3>
                        <div className="progress-bar">
                            <div className="progress react"></div>
                        </div>
                    </div>

                    <div className="skill-card node">
                        <div className="icon-wrapper">
                            <FaNodeJs className="icon" />
                        </div>
                        <h3 className="skill-title">Node.js</h3>
                        <div className="progress-bar">
                            <div className="progress node"></div>
                        </div>
                    </div>

                    <div className="skill-card github">
                        <div className="icon-wrapper">
                            <FaGithub className="icon" />
                        </div>
                        <h3 className="skill-title">GitHub</h3>
                        <div className="progress-bar">
                            <div className="progress github"></div>
                        </div>
                    </div>

                    <div className="skill-card gsap">
                        <div className="icon-wrapper">
                            <FaGem className="icon" />
                        </div>
                        <h3 className="skill-title">GSAP</h3>
                        <div className="progress-bar">
                            <div className="progress gsap"></div>
                        </div>
                    </div>

                    <div className="skill-card threejs">
                        <div className="icon-wrapper">
                            <FaCube className="icon" />
                        </div>
                        <h3 className="skill-title">Three.js</h3>
                        <div className="progress-bar">
                            <div className="progress threejs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
import '@/Components/Skills/SkillSection.css'