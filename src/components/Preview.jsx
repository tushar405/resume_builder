import React, { useRef } from 'react'
import Template1 from './Template1';
import Template2 from './Template2';
import html2pdf from "html2pdf.js";
import "./Preview.css"

const Preview = ({data,template}) => {
    
    const resumeRef = useRef(); 
 const handleDownload = () => {
    const element = resumeRef.current;

    
    html2pdf().from(element).save("resume.pdf");
 }


    const skillsArray = data.skills.split(",");
    const projectsArray = data.projects.split(",");
  return (

    
    <div>
      <div className="preview">
        <h2 className='effects'>
        Resume Preview
        </h2>

        <button onClick={handleDownload}>Download PDF</button>
        </div>

        <div className='templates' ref={resumeRef}>

        {template==="template1"?(<Template1 data={data}/>):(<Template2 data={data}/>)}
       
        </div>
       
    </div>
  )
}

export default Preview