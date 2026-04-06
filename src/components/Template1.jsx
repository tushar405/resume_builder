import React from "react";
import "./Template1.css";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Template1 = ({ data }) => {

  const skillsArray = data.skills.split(",");
  const projectsArray = data.projects.split("\n");
  const educationArray = data.education.split("\n");
  const experienceArray = data.experience.split(",");

  return (
    <div className="template1">
      <p className="heading">{data.name}</p>

      <p className="heading2">{data.profile}</p>

         <div className="detail">
            <p><CiPhone />{data.phone}</p>
            <p><CgMail />{data.email}</p>
             <p><FaLinkedin />{data.linkedin}</p>
            <p><FaGithub />{data.github}</p>
            </div>
    
<div className="detail2">
            <h3>Summary</h3>
        <hr />
            <p className="bio-data">{data.summary}</p>
            </div>
<br />
      <h3 className="skills-key">Skills</h3>
  <hr /> 
      <div className="skills">
        <div className="text">
        {skillsArray.map((skill, i) => (
          <span className="skills-key" key={i}>{skill.trim()}</span>
        ))}
        </div>
      </div>
      
      

  <h3 className="experience-key2">Experience</h3>
    <hr />
       <ul className="experience-key3">
        {experienceArray.map((experience, index) => (
          <p className="experience-key" key={index}>•{experience.trim()}</p>
        ))}
      </ul>

   
      <h3 className="project-key2">Projects</h3>
    <hr />
      <ul className="project-key">
        {projectsArray.map((p, i) => (
          <p key={i}>•{p.trim()}</p>
        ))}
      </ul>

         <h3 className="education-key2">Education</h3>
    <hr />
       <ul>
        {educationArray.map((education, index) => (
          <p className="education-key" key={index}>•{education.trim()}</p>
        ))}
      </ul>
    </div>
  );
};

export default Template1;