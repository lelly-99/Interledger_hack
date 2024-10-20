// import React from "react";
// import Item from "./Item";
// import SendButton from "./SendButton";

// function DashBoard() {
//   return (
//     <div className="dashboard">
//       <Item />
//       <SendButton />
//     </div>
//   );
// }

// export default DashBoard;
import {  useNavigate } from "react-router-dom"

const Dashboard = () => {
  const userBalance = 1000; // Example balance
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Section */}
      <div className="mb-20 flex">
        {/* Left Top - Balance */}
        <div className="w-1/2 flex items-center justify-center border-r border-gray-300 p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-700">Balance</h2>
            <p className="text-4xl font-semibold text-green-500 mt-2">R{userBalance}</p>
          </div>
        </div>

        {/* Right Top - Buttons */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="space-y-4">
            <button  onClick={() => {navigate("/send")}} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg">
              Withdraw
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg">
              Transfer
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Table */}
      <div className=" flex items-center justify-center p-10">
        <table className="table-auto w-3/4 bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">2024-10-20</td>
              <td className="border px-4 py-2">You</td>
              <td className="border px-4 py-2">Mark</td>
              <td className="border px-4 py-2 text-green-500">500</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2024-10-18</td>
              <td className="border px-4 py-2">Mark</td>
              <td className="border px-4 py-2">You</td>
              <td className="border px-4 py-2 text-red-500">-100</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2024-10-15</td>
              <td className="border px-4 py-2">You</td>
              <td className="border px-4 py-2">Jack</td>
              <td className="border px-4 py-2 text-red-500">-200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;