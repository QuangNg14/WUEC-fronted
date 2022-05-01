import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyForm.css";

const CompanyForm = () => {
  // const [state, setState] = useState({
  //   name: "",
  //   industry: "",
  //   short_desc: "",
  //   desc: "",
  //   link: "",
  //   status: "",
  // });
  // const handleInputChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;

  //   setState({ ...state, name: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("company name" + state.name);
  //   fetch("http://127.0.0.1:8080/addcompany", {
  //       // this is Whinnie's local database
  //     method: "post",
  //     mode: "cors",
  //     body: {
  //       name: state.name,
  //       industry: state.industry,
  //       short_desc: state.short_desc,
  //       desc: state.desc,
  //       link: state.link,
  //       status: state.status,
  //     },
  //   });
  // };
  const navigate = useNavigate();
  return (
    <div className="formbody">
      <link
        href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <div id="survey-container">
        <h1 id="title">Start-up submission form</h1>
        <p id="description">Share your venture with us!</p>
        <form id="survey-form">
          {/* name */}
          <label id="name-label" className="row-label">
            Company Name:
          </label>
          <input
            id="name"
            className="row-input"
            type="text"
            placeholder="Enter your name"
            required
          />
          {/* link */}
          <label id="name-label" className="row-label">
            Link:
          </label>
          <input
            id="name"
            className="row-input"
            type="text"
            placeholder="Enter your start-up URL"
            required
          />
          {/* email */}
          <label id="email-label" className="row-label">
            Short Description:
          </label>
          <input
            id="email"
            className="row-input"
            type="link"
            placeholder="Briefly describe your start-up"
            required
          />
          {/* industry dropdown */}
          <label className="row-label" htmlFor="dropdown">
            Industry:
          </label>
          <select id="dropdown" className="row-input" required>
            <option disabled selected>
              Select an Option
            </option>
            <option value="primary">Finance</option>
            <option value="secondary">Technology</option>
            <option value="higher">Education</option>
            <option value="na">Other</option>
          </select>
          {/* years of experience */}
          <label id="number-label" className="row-label" htmlFor="number">
            Number of team members (optional):
          </label>
          <input
            id="number"
            className="row-input"
            type="number"
            placeholder="Enter number of people in your team"
            min={0}
            max={50}
          />
          {/* comments textarea */}
          <label className="row-label" htmlFor="comments">
            Additional Information:
          </label>
          <textarea
            id="comments"
            placeholder="Enter a formal description here..."
            defaultValue={""}
          />
          {/* submit button */}
          <button
            id="submit"
            type="submit"
            onClick={() => navigate("/landing")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Company Name:
    //     <input
    //       name="name"
    //       type="text"
    //       value={state.name}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Industry:
    //     <input
    //       name="industry"
    //       type="text"
    //       value={state.industry}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Short Description:
    //     <input
    //       name="short_desc"
    //       type="text"
    //       value={state.short_desc}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Description:
    //     <input
    //       name="desc"
    //       type="text"
    //       value={state.desc}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Link:
    //     <input
    //       name="link"
    //       type="text"
    //       value={state.link}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Status:
    //     <input
    //       name="status"
    //       type="text"
    //       value={state.status}
    //       onChange={handleInputChange}
    //     />
    //   </label>
    //   <br />
    //   <input type="submit" value="Submit" />
    // </form>
  );
};

export default CompanyForm;
