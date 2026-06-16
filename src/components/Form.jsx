import React from 'react'
import "./Form.css";
import { toast } from 'react-toastify';

const Form = ({ data, setData }) => {

  const handle = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handlebtn = () => {

    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.skills ||
      !data.summary ||
      !data.education ||
      !data.experience ||
      !data.linkedin ||
      !data.github
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Details saved successfully", {
      autoClose: 1300,
      progressBar: true,
    });
  };

  return (
    <div className="form-container">

      {/* 👇 Bas ye wrapper add hua hai */}
      <div className="form-wrapper">

        {/* 👇 Heading card ke bahar aa gayi */}
        <h2 className="form-title">Resume Builder</h2>

        <div className="form-card">

          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={data.name}
              onChange={handle}
            />

            <input
              type="text"
              name="profile"
              placeholder="Enter your profile"
              value={data.profile}
              onChange={handle}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={data.phone}
              onChange={handle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handle}
            />

            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              value={data.linkedin}
              onChange={handle}
            />

            <input
              type="text"
              name="github"
              placeholder="GitHub"
              value={data.github}
              onChange={handle}
            />
          </div>

          <textarea
            name="summary"
            placeholder="Professional Summary"
            value={data.summary}
            onChange={handle}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            value={data.skills}
            onChange={handle}
          />

          <textarea
            name="experience"
            placeholder="Work Experience"
            value={data.experience}
            onChange={handle}
          />

          <textarea
            name="projects"
            placeholder="Projects (comma separated)"
            value={data.projects}
            onChange={handle}
          />

          <textarea
            name="education"
            placeholder="Education"
            value={data.education}
            onChange={handle}
          />

          <button className="submit-btn" onClick={handlebtn}>
            Save Details
          </button>

        </div>
      </div>
    </div>
  );
};

export default Form;