import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { reset, studentsList } from "../slice/StudentSlice";
import { useDispatch, useSelector } from "react-redux";

function StudentListTable({ option }) {
  const dispatch = useDispatch();

  const { students, student, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.students);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    dispatch(studentsList());
  }, [dispatch, studentsList]);

  const navigate = useNavigate();

  const search = option
    ? students.filter((data) => {
        return (
          data.age === +option ||
          data.state.toLowerCase().includes(option.toLowerCase()) ||
          data.level === option ||
          data.gender.toLowerCase() === option.toLowerCase()
        );
      })
    : students;

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
            ? students.map((res) => (
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
                      onClick={() => {
                        navigate(`/result/${res.id}`);
                      }}
                      target="_blank"
                      className="btn__btn"
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
                    <button
                      onClick={() => navigate(`/result/${res.id}`)}
                      target="_blank"
                      className="btn__btn"
                    >
                      Download Result
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentListTable;
