import React from "react";
import "./Template2.css";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Template2 = ({ data }) => {

  const skillsArray = data.skills.split(",");
  const projectsArray = data.projects.split("\n");
   const educationArray = data.education.split("\n");
    const experienceArray = data.experience.split("\n");

  return (
    <div className="template2">
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

            

      <h3 className="skill">Skills</h3>
  <hr /> 
      <div className="skills--key">
        <div className="text">
        {skillsArray.map((skill, i) => (
          <span className="decoration-2" key={i}>{skill.trim()}</span>
        ))}
        </div>
      </div>
     
     <h3 className="experience-key1">Experience</h3>
    <hr />
       <ul>
        {experienceArray.map((experience, index) => (
          <p className="experience-key" key={index}>{experience.trim()}</p>
        ))}
      </ul>

  


      <h3 className="project-key1">Projects</h3>
  <hr />
      {projectsArray.map((store, i) => (
        <p className="project-key" key={i}>•{store.trim()}</p>
      ))}

          <h3>Education</h3>
    <hr />
    
       <ul>
        {educationArray.map((education, index) => (
          <p className="education-key" key={index}>• {education.trim()}</p>
        ))}
      </ul>

    </div>
  );
};

export default Template2;