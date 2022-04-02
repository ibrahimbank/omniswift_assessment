import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { createRef } from "react";

function StudentListTable({ option, print }) {
  const [data, setData] = useState([]);

  const ALL_DATA_URL = "https://testapiomniswift.herokuapp.com/api/viewAllData";

  useEffect(() => {
    axios.get(ALL_DATA_URL).then((res) => {
      setData(res.data.data.students);
    });
  }, []);

  const ref = createRef();

  // const navigate = useNavigate();

  const search = option
    ? data.filter((data) => {
        return (
          data.age === +option ||
          data.state.toLowerCase().includes(option.toLowerCase()) ||
          data.level === option ||
          data.gender.toLowerCase() === option.toLowerCase()
        );
      })
    : data;

  return (
    <div className="table__container">
      <table className="table">
        <thead>
          <tr className="table__row row__header">
            <th>S/N</th>
            <th>Surname</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Level</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!option
            ? data.map((res) => (
                <tr className="table__row" key={res.id}>
                  <td>{res.id}</td>
                  <td>
                    {res.surname
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>
                    {res.firstname
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>{res.age}</td>
                  <td>
                    {res.gender
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>{res.level}</td>
                  <td>
                    {res.state
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>
                    <button
                      // to={`/result/${res.id}`}
                      target="_blank"
                      className="btn__btn"
                      onClick={print}
                    >
                      Download Result
                    </button>
                  </td>
                </tr>
              ))
            : search.map((res) => (
                <tr className="table__row" key={res.id}>
                  <td>{res.id}</td>
                  <td>
                    {res.surname
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>
                    {res.firstname
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>{res.age}</td>
                  <td>
                    {res.gender
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>{res.level}</td>
                  <td>
                    {res.state
                      .split(" ")
                      .map(
                        (word) =>
                          word[0].toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </td>
                  <td>
                    <Link
                      to={`/result/${res.id}`}
                      target="_blank"
                      className="btn__btn"
                      onClick={print}
                    >
                      Download Result
                    </Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentListTable;
