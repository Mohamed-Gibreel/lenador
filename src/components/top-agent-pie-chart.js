import React, { useEffect, useState } from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { getTopAgentByTotalQrders } from "../data/analytics/api";

export function TopAgentPieChart() {
  const [topAgentData, setTopAgentData] = useState([]);
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      let topAgentData = await getTopAgentByTotalQrders();
      let data = [];
      for (var dataIndex in topAgentData.data) {
        data.push({
          x: topAgentData.data[dataIndex].agentNameEn,
          y: topAgentData.data[dataIndex].totalCount,
        });
      }
      setTopAgentData(data);
    } catch (e) {
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      console.log("SOMETHING WENT WRONG");
      console.log(e);
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
  };

  const data1 = [
    { x: "United States", y: 45, text: "USA", fill: "#00226C" },
    { x: "Australia", y: 53, text: "AUS", fill: "#0450C2" },
    { x: "China", y: 56, text: "CHN", fill: "#0073DC" },
    { x: "India", y: 61, text: "IND", fill: "#0D98FF" },
    { x: "Japan", y: 40, text: "JPN", fill: "#9CD9FF" },
    { x: "United Kingdom", y: 20, text: "UK", fill: "#0450C2" },
  ];
  return (
    <div className="bg-white shadow-lg rounded-lg w-full flex flex-col p-6 h-96 gap-y-4">
      <div className="text-sm font-bold">Top agent by total quantity</div>
      <AccumulationChartComponent className="h-full">
        <Inject
          services={[
            PieSeries,
            AccumulationLegend,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={topAgentData.length > 0 ? topAgentData : data1}
            animation={false}
            xName="x"
            explode={false}
            yName="y"
            type="Pie"
            innerRadius="80"
            dataLabel={{
              visible: true,
              position: "Outside",
              font: {
                fontWeight: "600",
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
}
