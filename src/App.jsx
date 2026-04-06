import React, { useEffect, useState } from 'react'
import "./App.css"
import Form from './components/Form'
import Preview from './components/Preview'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

 const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : {
      name:"",
      profile:"",
      phone:"",
      email:"",
      linkedin:"",
      github:"",
      summary:"",
      skills:"",
      experience:"",
      projects:"",
      education:"",
    };
  });

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(data));
  }, [data]);

  const[template,setTemplate] = useState("template1");
  return (
   
    <div className='container'>
      <div className="left">
<Form data={data} setData={setData}/>

<br />

<div className="fix-container">
<button className='template-btn' onClick={()=>setTemplate("template1")}>Template 1</button>
<button className='template-btn' onClick={()=>setTemplate("template2")}>Template 2</button>
</div>
      </div>

      <div className="right">
<Preview data={data} template={template}/>
      </div>
      
                     <ToastContainer />
    </div>
    
  )
}

export default App
