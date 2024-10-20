import React from "react";

function Summary() {
  return (
    <div className="summary">
      <h1>Transactions history</h1>
      <div className="transaction">
        <table class="table rounded-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark (88572)</td>
              <td>You</td>
              <td>6000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>You</td>
              <td>Jacob (26992)</td>
              <td>500</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry (23890)</td>
              <td>You</td>
              <td>350</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
