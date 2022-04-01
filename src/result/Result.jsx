import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResultFooter from "./ResultFooter";
import ResultHeader from "./ResultHeader";
import ResultList from "./ResultList";

function Result() {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  const RESULT_URL = `https://testapiomniswift.herokuapp.com/api/viewResult/${id}`;

  axios
    .post("https://testapiomniswift.herokuapp.com/api/viewResult/2")
    .then((res) => console.log(res.data));
  useEffect(() => {
    axios.post(RESULT_URL).then((res) => setValue(res.data));
  }, [RESULT_URL]);

  return (
    <div className="result__container">
      <div className="result">
        <ResultHeader
          avater={value.profile_picture}
          surname={value.data.surname}
          firstName={value.data.firstname}
          regNo={value.data.reg_no}
          level={value.data.level}
          session={value.data.session}
        />
        <ResultList result={value.data.result} />
        <ResultFooter
          gpatd={value.data.cummulative.gpatd}
          gpats={value.data.cummulative.gpats}
          gptd={value.data.cummulative.gptd}
          gpts={value.data.cummulative.gpts}
          remarks={value.data.cummulative.remarks}
          untd={value.data.cummulative.untd}
          unts={value.data.cummulative.unts}
        />
      </div>
    </div>
  );
}

export default Result;
