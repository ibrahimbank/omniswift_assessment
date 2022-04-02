import "./App.css";
import StudentTable from "./studentTable/StudentTable";
import Result from "./result/Result";
import jsPDF from "jspdf";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { renderToString } from "react-dom/server";

function App() {
  const print = () => {
    const string = renderToString(Result);
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.html(string);
    pdf.save("pdf");
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <StudentTable print={print} />
          </Route>
          <Route path="/result/:id" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
