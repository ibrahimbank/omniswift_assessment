import React from "react";

function ResultFooter() {
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
            <td> 028</td>
            <td>028</td>
            <td>067</td>
            <td>067</td>
            <td>2.71</td>
            <td>2.71</td>
          </tr>
        </tbody>
      </table>

      <h5 className="remarks">
        Remarks: <span>Pass</span>
      </h5>

      <div className="signature">
        <div className="sign"></div>
        <p>Registrar</p>
      </div>
    </div>
  );
}

export default ResultFooter;
