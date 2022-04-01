import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ResultList() {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  const RESULT_URL = `https://testapiomniswift.herokuapp.com/api/viewResult/${id}`;

  useEffect(() => {
    axios.post(RESULT_URL).then((res) => setValue(res.data.data.result));
  }, [RESULT_URL]);

  return (
    <div className="result__list">
      <table className="table result__table__table">
        <thead>
          <tr className="table__row row__header result_table">
            <th>S/N</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Unit</th>
            <th>Grade</th>
            <th>Total Point</th>
          </tr>
        </thead>
        <tbody>
          {value.map((res, key) => (
            <tr className="table__row result_td" key={key}>
              <td>{key + 1}</td>
              <td>{res.coursecode}</td>
              <td>{res.title}</td>
              <td>{res.credit_unit}</td>
              <td>{res.grade}</td>
              <td>{res.total_point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;
