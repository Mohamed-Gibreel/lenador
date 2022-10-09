import React from "react";
import {
  AxisModel,
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  SplineSeries,
} from "@syncfusion/ej2-react-charts";

export default function MarketingQuantityGraph() {
  const primaryXAxis = { valueType: "Category" };
  const data = [
    { x: "Jan", y: 15 },
    { x: "Feb", y: 22 },
    { x: "Mar", y: 32 },
    { x: "Apr", y: 31 },
    { x: "May", y: 29 },
    { x: "Jun", y: 24 },
    { x: "Jul", y: 18 },
    { x: "Aug", y: 18 },
    { x: "Sep", y: 18 },
    { x: "Oct", y: 18 },
    { x: "Nov", y: 18 },
    { x: "Dec", y: 18 },
  ];
  const tooltip = { enable: true };
  const legendSettings = { visible: true };
  const marker = { visible: true };
  return (
    <div className="bg-white shadow-lg rounded-lg w-full mb-4 p-6 h-96">
      <div className="">Completed Marketing Quantity</div>
      <ChartComponent
        primaryXAxis={primaryXAxis}
        primaryYAxis={{ intreval: 5 }}
        legendSettings={legendSettings}
        tooltip={tooltip}
        className="h-full"
      >
        <Inject services={[SplineAreaSeries, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data}
            col
            xName="x"
            yName="y"
            type="SplineArea"
            marker={marker}
            width={20}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
