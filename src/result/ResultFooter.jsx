import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { resultGrade } from "../slice/ResultSlice";
// import { reset } from "../slice/StudentSlice";

function ResultFooter() {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  const RESULT_URL = `https://testapiomniswift.herokuapp.com/api/viewResult/${id}`;

  useEffect(() => {
    axios.post(RESULT_URL).then((res) => setValue(res.data.data.cummulative));
  }, [RESULT_URL]);

  // const dispatch = useDispatch();

  // const { grade, isSuccess } = useSelector((state) => state.students);

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(reset());
  //   }
  //   dispatch(resultGrade(id));
  // }, [dispatch, reset, resultGrade]);

  return (
    <div className="result__footer">
      <table className="footer__table">
        <thead>
          <tr className="footer__table__row row__head">
            <th>UNTS</th>
            <th> UNTD</th>
            <th>GPTS</th>
            <th>GPTD</th>
            <th>GPATS</th>
            <th>GPATD</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footer__table__row row_list">
            <td> {value.gpatd}</td>
            <td>{value.gpats}</td>
            <td>{value.gptd}</td>
            <td>{value.gpts}</td>
            <td>{value.untd}</td>
            <td>{value.unts}</td>
          </tr>
        </tbody>
      </table>

      <h5 className="remarks">
        Remarks: <span>{value.remarks}</span>
      </h5>

      <div className="signature">
        <div className="sign"></div>
        <p>Registrar</p>
      </div>
    </div>
  );
}

export default ResultFooter;
