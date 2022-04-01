import React from "react";
import ResultFooter from "./ResultFooter";
import ResultHeader from "./ResultHeader";
import ResultList from "./ResultList";

function result() {
  return (
    <div className="result">
      <ResultHeader />
      <ResultList />
      <ResultFooter />
    </div>
  );
}

export default result;
