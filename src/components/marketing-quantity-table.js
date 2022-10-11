import React, { useEffect, useState } from "react";
import { getProcessStatusChart } from "../data/analytics/api";

export function MarketingQuantityTable() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      let chartDataFromApi = await getProcessStatusChart();
      setChartData(chartDataFromApi.data);
    } catch (e) {
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      console.log("SOMETHING WENT WRONG");
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
  };

  const getValueOfType = (data, type) => {
    return chartData
      .filter((c) => c.processNameEn == data.processNameEn)[0]
      ?.processStatuses?.filter(
        (status) => status.statusNameEn == type || status.statusNameAr == type
      )[0]?.statusNo;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full flex flex-col p-6 h-96 gap-y-4 basis-0">
      <div className="text-sm font-bold">Completed Marketing Quantity</div>
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
          {chartData.map((data) => (
            <tr>
              <td className="border-b">{data.processNameEn}</td>
              <td className="border-b text-center ">
                {getValueOfType(data, "NotStarted")}
              </td>
              <td className="border-b text-center ">
                {getValueOfType(data, "InProgress")}
              </td>
              <td className="border-b text-center ">
                {getValueOfType(data, "Completed")}
              </td>
              <td className="border-b text-center ">
                {getValueOfType(data, "NotStarted") +
                  getValueOfType(data, "InProgress") +
                  getValueOfType(data, "Completed")}
              </td>
            </tr>
          ))}
          {chartData.length == 0 && (
            <>
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
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
