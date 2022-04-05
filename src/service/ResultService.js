import axios from "axios";

const API_URL = "https://testapiomniswift.herokuapp.com/api/viewResult/";

const results = async (id) => {
  const response = await axios.post(API_URL + id);
  return response.data.data.result;
};

const resultsData = async (id) => {
  const response = await axios.post(API_URL + id);

  return response.data.data;
};

const avater = async (id) => {
  const response = await axios.post(API_URL + id);

  return response.data;
};

// const grade = async (id) => {
//   const response = await axios.post(API_URL + id);
//   //   console.log(response.data.data.cummulative);

//   return response.data.data.cummulative;
// };

const resultService = {
  results,
  resultsData,
  avater,
  //   grade,
};

export default resultService;
