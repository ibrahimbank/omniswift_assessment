import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { reset, result } from "../slice/ResultSlice";
function ResultList() {
  // const [value, setValue] = useState([]);
  const { id } = useParams();
  // const RESULT_URL = `https://testapiomniswift.herokuapp.com/api/viewResult/${id}`;

  const { results, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.results
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.post(RESULT_URL).then((res) => setValue(res.data.data.result));

    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      // dispatch(reset());
    }
  }, [dispatch, isSuccess, id, message, isError]);

  useEffect(() => {
    dispatch(result(id));
  }, [dispatch, id]);

  if (isLoading) {
    <h2>Loading....</h2>;
  }

  console.log(results);

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
          {results.map((res, key) => (
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
