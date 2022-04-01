import React from "react";

function ResultFooter({ gpatd, gpats, gptd, gpts, remarks, untd, unts }) {
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
            <td> {gpatd}</td>
            <td>{gpats}</td>
            <td>{gptd}</td>
            <td>{gpts}</td>
            <td>{untd}</td>
            <td>{unts}</td>
          </tr>
        </tbody>
      </table>

      <h5 className="remarks">
        Remarks: <span>{remarks}</span>
      </h5>

      <div className="signature">
        <div className="sign"></div>
        <p>Registrar</p>
      </div>
    </div>
  );
}

export default ResultFooter;
