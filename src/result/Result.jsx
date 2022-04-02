import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResultFooter from "./ResultFooter";
import ResultHeader from "./ResultHeader";
import ResultList from "./ResultList";
import { createRef } from "react";

function Result() {
  const [value, setValue] = useState([]);
  const [avater, setAvater] = useState([]);
  const { id } = useParams();
  const RESULT_URL = `https://testapiomniswift.herokuapp.com/api/viewResult/${id}`;

  axios
    .post(`https://testapiomniswift.herokuapp.com/api/viewResult/${id}`)
    .then((res) => console.log(res.data.data.cummulative));
  useEffect(() => {
    axios.post(RESULT_URL).then((res) => setValue(res.data.data));
    axios.post(RESULT_URL).then((res) => setAvater(res.data));
  }, [RESULT_URL]);

  const ref = createRef();

  return (
    <div className="result__container" id="resultt">
      <div className="result">
        <ResultHeader
          avater={avater.profile_picture}
          surname={value.surname}
          firstName={value.firstname}
          regNo={value.reg_no}
          level={value.level}
          session={value.session}
        />
        <ResultList />
        <ResultFooter />
      </div>
    </div>
  );
}

export default Result;
