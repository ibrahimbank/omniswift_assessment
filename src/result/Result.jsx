import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import axios from "axios";
import ResultFooter from "./ResultFooter";
import ResultHeader from "./ResultHeader";
import ResultList from "./ResultList";
import { resultsData, reset, resultAvater } from "../slice/ResultSlice";

function Result() {
  // const [value, setValue] = useState([]);
  // const [avater, setAvater] = useState([]);
  const { id } = useParams();

  // const RESULT_URL = `https://testapiomniswift.herokuapp.com/api/viewResult/${id}`;

  // axios
  //   .post(`https://testapiomniswift.herokuapp.com/api/viewResult/${id}`)
  //   .then((res) => console.log(res.data.data));
  // useEffect(() => {
  //   axios.post(RESULT_URL).then((res) => setValue(res.data.data));
  //   axios.post(RESULT_URL).then((res) => setAvater(res.data));
  // }, [RESULT_URL]);

  const { resultData, avater, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.results);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      // dispatch(reset());
    }
  }, [dispatch, isSuccess, id, message, isError]);

  useEffect(() => {
    dispatch(resultsData(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(resultAvater(id));
  }, [dispatch, id]);

  if (isLoading) {
    <h2>Loading....</h2>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 3000);

    // clearTimeout(timer);
  }, []);

  return (
    <div className="result__container">
      <div className="result">
        <ResultHeader
          avater={avater.profile_picture}
          surname={resultData.surname}
          firstName={resultData.firstname}
          regNo={resultData.reg_no}
          level={resultData.level}
          session={resultData.session}
        />
        <ResultList />
        <ResultFooter />
      </div>
    </div>
  );
}

export default Result;
