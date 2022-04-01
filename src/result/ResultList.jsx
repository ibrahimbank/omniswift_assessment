function ResultList({ result }) {
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
          {result.map((res, key) => (
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
