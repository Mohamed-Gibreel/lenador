import React, { useEffect, useState } from "react";
import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { getTopAgentByTotalQuantity } from "../data/analytics/api";

export function TopAgentBarChart() {
  const [topAgentData, setTopAgentData] = useState([]);
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      let topAgentData = await getTopAgentByTotalQuantity();
      let data = [];
      let index = 0;
      for (var dataIndex in topAgentData.data) {
        data.push({
          x: index,
          y: topAgentData.data[dataIndex].totalQuantity,
        });
        index++;
      }
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      console.log("data");
      console.log(data);
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      setTopAgentData(data);
    } catch (e) {
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      console.log("SOMETHING WENT WRONG");
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
  };

  const primaryXAxis = {
    valueType: "Double",
    visible: false,
    width: 0,
  };
  const data1 = [
    { x: 1, y: 172 },
    { x: 2, y: 300 },
    { x: 2, y: 239 },
    { x: 3, y: 462 },
    { x: 4, y: 621 },
    { x: 5, y: 123 },
    { x: 6, y: 1256 },
    { x: 7, y: 612 },
    { x: 8, y: 851 },
    { x: 9, y: 543 },
    { x: 10, y: 1280 },
    { x: 11, y: 612 },
    { x: 12, y: 697 },
  ];
  return (
    <div className="bg-white shadow-lg rounded-lg w-full h-96 flex flex-col p-6 gap-y-4">
      <div className="text-sm font-bold">Top agent by total quantity</div>
      <ChartComponent
        primaryXAxis={primaryXAxis}
        legendSettings={{
          visible: true,
        }}
        className="h-full w-full"
        id="top-agent-bar-chart"
      >
        <Inject services={[ColumnSeries, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={topAgentData.length > 0 ? topAgentData : data1}
            xName="x"
            yName="y"
            type="Column"
            fill="#3F4CD9"
            columnWidth={0.35}
            cornerRadius={{
              topLeft: 6,
              topRight: 6,
            }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
