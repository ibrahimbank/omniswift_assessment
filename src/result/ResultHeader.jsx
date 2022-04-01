import React from "react";
import Logo from "../img/logo.png";
import Passport from "../img/Passport.png";

function ResultHeader() {
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

        <img src={Passport} alt="avater" className="avater" />
      </div>

      <div className="personal__details">
        <h5>
          Name: <span>Chukwuma James Nnamdi</span>
        </h5>
        <h5 className="reg">
          Reg. No.: <span>FCE/PGDE/2021/002</span>
        </h5>
        <h5>
          Level: <span>100 level</span>
        </h5>
        <h5 className="reg">
          Session: <span>2022/2023 Session</span>
        </h5>
      </div>
    </div>
  );
}

export default ResultHeader;
