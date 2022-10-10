import React from "react";

export default function MarketingQuantityTable() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full p-6 h-96">
      <div className="mb-8 text-sm font-bold">Completed Marketing Quantity</div>
      <table className="w-[inherit] h-[80%]">
        <thead>
          <tr>
            <th className="border-b"></th>
            <th className="border-b text-xs">Not Started</th>
            <th className="border-b text-xs">In Progress</th>
            <th className="border-b text-xs">Completed</th>
            <th className="border-b text-xs">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b">Marketings</td>
            <td className="border-b text-center ">5</td>
            <td className="border-b text-center ">17</td>
            <td className="border-b text-center ">13</td>
            <td className="border-b text-center ">33</td>
          </tr>
          <tr>
            <td className="border-b">Gifting</td>
            <td className="border-b text-center ">5</td>
            <td className="border-b text-center ">17</td>
            <td className="border-b text-center ">13</td>
            <td className="border-b text-center ">33</td>
          </tr>
          <tr>
            <td className="border-b">Store Transfer</td>
            <td className="border-b text-center ">5</td>
            <td className="border-b text-center ">17</td>
            <td className="border-b text-center ">13</td>
            <td className="border-b text-center ">33</td>
          </tr>
          <tr>
            <td className="border-b">Online Order</td>
            <td className="border-b text-center ">5</td>
            <td className="border-b text-center ">17</td>
            <td className="border-b text-center ">13</td>
            <td className="border-b text-center ">33</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
