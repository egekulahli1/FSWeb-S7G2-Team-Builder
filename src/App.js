import React, { useState } from "react";
import "./App.css";
import employeeData from "./components/EmployeeData";
import Form from "./components/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  const [teams, setTeams] = useState(employeeData);

  const handleFormSubmit = (newTeamMember) => {
    setTeams((prevTeams) => [
      ...prevTeams,
      { id: Date.now(), ...newTeamMember },
    ]);
  };
  const handleDelete = (id) => {
    setTeams((prevTeams) =>
      prevTeams.filter((teamMember) => teamMember.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form onSubmit={handleFormSubmit} />
      <div className="members">
        {teams.map((teamMember) => (
          <div key={teamMember.id} class="member">
            <p>
              <strong>Name : </strong>
              {teamMember.name}{" "}
            </p>
            <p>
              <strong>Email : </strong>
              {teamMember.email}{" "}
            </p>
            <p>
              <strong>Job Title : </strong>
              {teamMember.jobTitle}
            </p>
            <div className="delete-container">
              <button
                className="delete"
                onClick={() => handleDelete(teamMember.id)}
                
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
