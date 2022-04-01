import "./App.css";
import StudentTable from "./studentTable/StudentTable";
import Result from "./result/Result";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StudentTable />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
