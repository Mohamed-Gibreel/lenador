import React from "react";
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

export default function TopAgentPieChart() {
  const data1 = [
    { x: "United States", y: 45, text: "USA", fill: "#00226C" },
    { x: "Australia", y: 53, text: "AUS", fill: "#0450C2" },
    { x: "China", y: 56, text: "CHN", fill: "#0073DC" },
    { x: "India", y: 61, text: "IND", fill: "#0D98FF" },
    { x: "Japan", y: 40, text: "JPN", fill: "#9CD9FF" },
    { x: "United Kingdom", y: 20, text: "UK", fill: "#0450C2" },
  ];
  return (
    <div className="bg-white shadow-lg rounded-lg w-full mb-4 p-6 h-96">
      <div className="">Top agent by total quantity</div>
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
            dataSource={data1}
            animation={false}
            xName="x"
            explode={false}
            yName="y"
            type="Pie"
            innerRadius="80"
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
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
