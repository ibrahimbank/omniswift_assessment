import React from "react";
import Logo from "../img/logo.png";

function ResultHeader({ avater, surname, firstName, regNo, level, session }) {
  return (
    <div className="result__header">
      <div className="top">
        <img src={Logo} alt="logo" className="logo" />
        <div className="school__details">
          <h2 className="school__name">FREMONT COLLEGE OF EDUCATION</h2>
          <p>No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.</p>
          <h2 className="student__program">
            Post Graduate Diploma in Education
          </h2>
          <h5>Student First Semester Statement Of Result</h5>
        </div>

        <img src={avater} alt="avater" className="avater" />
      </div>

      <div className="personal__details">
        <h5>
          Name:
          <span>
            {surname}
            {firstName}
            {/* {surname
              .split(" ")
              .map(
                (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
              
            {firstName
              .split(" ")
              .map(
                (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")} */}
          </span>
        </h5>
        <h5 className="reg">
          Reg. No.: <span>{regNo}</span>
        </h5>
        <h5>
          Level: <span>{level}</span>
        </h5>
        <h5 className="reg">
          Session: <span>{session}</span>
        </h5>
      </div>
    </div>
  );
}

export default ResultHeader;
