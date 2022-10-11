import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { getQuantityByMonth } from "../data/analytics/api";

export function MarketingQuantityGraph() {
  const [quantityData, setQuantityData] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      let quantityDataFromApi = await getQuantityByMonth();
      let data = [];
      quantityDataFromApi.data.forEach((record) =>
        data.push({
          x: new Date(2022, record.month - 1 ?? 0, 1),
          y: record.totalQuantity,
        })
      );
      setQuantityData(data);
    } catch (e) {
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      console.log("SOMETHING WENT WRONG!");
      console.log(e);
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }
  };

  const primaryXAxis = {
    valueType: "DateTime",
  };
  const data = [
    { x: new Date(2002, 0, 1), y: 100 },
    { x: new Date(2002, 1, 1), y: 200 },
    { x: new Date(2002, 2, 1), y: 150 },
    { x: new Date(2002, 3, 1), y: 300 },
    { x: new Date(2002, 4, 1), y: 400 },
    { x: new Date(2002, 5, 1), y: 600 },
    { x: new Date(2002, 6, 1), y: 350 },
    { x: new Date(2002, 7, 1), y: 700 },
    { x: new Date(2002, 8, 1), y: 350 },
    { x: new Date(2002, 9, 1), y: 600 },
    { x: new Date(2002, 10, 1), y: 600 },
    { x: new Date(2002, 11, 1), y: 600 },
  ];
  const tooltip = { enable: true, shared: false };
  const legendSettings = { visible: true };
  const marker = {
    visible: true,
    height: 10,
    width: 10,
    border: { width: 1, color: "blue" },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full h-96 flex flex-col p-6 gap-y-4 basis-0">
      <div className="text-sm font-bold">Completed Marketing Quantity</div>
      <ChartComponent
        primaryXAxis={primaryXAxis}
        primaryYAxis={{
          minimum: 0,
        }}
        legendSettings={legendSettings}
        tooltip={tooltip}
        className="h-full"
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={quantityData.length > 0 ? quantityData : data}
            xName="x"
            yName="y"
            type="SplineArea"
            marker={marker}
            fill="#EBEFFF"
            border={{
              width: 4,
              color: "#3F4CD9",
            }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
