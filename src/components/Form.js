import React, { useState } from "react";
import "./Form.css";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, jobTitle });
    setName("");
    setEmail("");
    setJobTitle("");
  };
  

  return (
    <div className='all-inputs'>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Name:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          
        </div>
        <div className="input-container">
          <label>
            Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          
        </div>
        <div className="input-container">
          <label>
            Job Title:</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
            />
          
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
