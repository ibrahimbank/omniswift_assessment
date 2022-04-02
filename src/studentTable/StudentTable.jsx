import { useState, useEffect } from "react";
import StudentListTable from "./StudentListTable";
import axios from "axios";
function StudentTable({ print }) {
  const [age, setAge] = useState([]);
  const [state, setState] = useState([]);
  const [level, setLevel] = useState([]);
  const [option, setOption] = useState("");

  const AGE__URL = "https://testapiomniswift.herokuapp.com/api/viewAllAges";
  const STATE__URL = "https://testapiomniswift.herokuapp.com/api/viewAllStates";
  const LEVEL__URL = "https://testapiomniswift.herokuapp.com/api/viewAllLevels";

  useEffect(() => {
    axios.get(AGE__URL).then((res) => setAge(res.data.data));
    axios.get(STATE__URL).then((res) => setState(res.data.data));
    axios.get(LEVEL__URL).then((res) => setLevel(res.data.data));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2 className="heading">Student Data Table</h2>
      <form className="form">
        <h4 className="form__header">Filter Student Table By:</h4>
        <div className="select__options">
          <div className="form-group">
            <label htmlFor="age" className="label">
              Age
            </label>
            <select
              className="select"
              onChange={(e) => setOption(e.target.value)}
              value={option}
            >
              <option>select age</option>
              {age.map((res) => (
                <option value={res.age} key={res.id}>
                  {res.age}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age" className="label">
              State
            </label>
            <select
              className="select"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option>select state</option>
              {state.map((res) => (
                <option value={res.name} key={res.id}>
                  {res.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age" className="label">
              Level
            </label>
            <select
              className="select"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option>select level</option>
              {level.map((res) => (
                <option value={res.level} key={res.id}>
                  {res.level}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select
              className="select"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option>select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button className="btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </form>

      <StudentListTable option={option} print={print} />
    </div>
  );
}

export default StudentTable;
