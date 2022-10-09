import React from "react";
import {
  AxisModel,
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

export default function TopAgentBarChart() {
  const primaryXAxis = { valueType: "Category", visible: false };
  const data1 = [
    { x: "1", y: 172 },
    { x: "2", y: 300 },
    { x: "2", y: 239 },
    { x: "3", y: 462 },
    { x: "4", y: 621 },
    { x: "5", y: 123 },
    { x: "6", y: 1256 },
    { x: "7", y: 612 },
    { x: "8", y: 851 },
    { x: "9", y: 543 },
    { x: "10", y: 1280 },
    { x: "11", y: 612 },
    { x: "12", y: 697 },
  ];
  return (
    <div className="bg-white shadow-lg rounded-lg w-full mb-4 p-6 h-96">
      <div className="">Top agent by total quantity</div>
      <ChartComponent primaryXAxis={primaryXAxis} className="h-full">
        <Inject services={[ColumnSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data1}
            xName="x"
            yName="y"
            type="Column"
            fill="#3F4CD9"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
