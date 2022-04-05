import { useState, useEffect } from "react";
import StudentListTable from "./StudentListTable";
import { useDispatch, useSelector } from "react-redux";
import {
  ageCategories,
  stateCategories,
  levelCategories,
  reset,
} from "../slice/StudentSlice";
function StudentTable() {
  const [option, setOption] = useState("");

  const dispatch = useDispatch();

  const { age, state, level, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.students);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    dispatch(ageCategories());
    dispatch(stateCategories());
    dispatch(levelCategories());
  }, [dispatch, stateCategories, levelCategories, ageCategories, isSuccess]);

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

      <StudentListTable option={option} />
    </div>
  );
}

export default StudentTable;
