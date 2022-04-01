import React from "react";

function ResultList() {
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
          <tr className="table__row result_td">
            <td> 1</td>
            <td>PDE 701</td>
            <td>History of Education</td>
            <td>2</td>
            <td>A</td>
            <td>8</td>
          </tr>
          <tr className="table__row result_td">
            <td> 2</td>
            <td className="full">PDE 701</td>
            <td className="wide">History of Education</td>
            <td>2</td>
            <td>A</td>
            <td>8</td>
          </tr>
          <tr className="table__row result_td">
            <td> 3</td>
            <td>PDE 701</td>
            <td>History of Education</td>
            <td>2</td>
            <td>A</td>
            <td>8</td>
          </tr>
          <tr className="table__row result_td">
            <td> 4</td>
            <td>PDE 701</td>
            <td>History of Education</td>
            <td>2</td>
            <td>A</td>
            <td>8</td>
          </tr>
          <tr className="table__row result_td">
            <td> 5</td>
            <td>PDE 701</td>
            <td>History of Education</td>
            <td>2</td>
            <td>A</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;
