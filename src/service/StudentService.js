import axios from "axios";

const API_URL = "https://testapiomniswift.herokuapp.com/api/viewAllData";

const AGE__URL = "https://testapiomniswift.herokuapp.com/api/viewAllAges";
const STATE__URL = "https://testapiomniswift.herokuapp.com/api/viewAllStates";
const LEVEL__URL = "https://testapiomniswift.herokuapp.com/api/viewAllLevels";

const students = async () => {
  const response = await axios.get(API_URL);

  return response.data.data.students;
};

const studentAgeGroup = async () => {
  const response = await axios.get(AGE__URL);

  return response.data.data;
};

const studentStateGroup = async () => {
  const response = await axios.get(STATE__URL);

  return response.data.data;
};

const studentLevelGroup = async () => {
  const response = await axios.get(LEVEL__URL);

  return response.data.data;
};

const studentService = {
  students,
  studentAgeGroup,
  studentStateGroup,
  studentLevelGroup,
};

export default studentService;
