import React from "react";
import {
  MarketingQuantityTable,
  MarketingQuantityGraph,
  TopAgentBarChart,
  TopAgentPieChart,
} from "../../components";

export function Homepage() {
  return (
    <div className="h-screen overflow-auto flex flex-col gap-4 lg:justify-center flex-grow">
      <div className="flex lg:flex-row flex-col gap-4 basis-0">
        <div className="flex-grow basis-0 min-w-0">
          <MarketingQuantityTable />
        </div>
        <div className="flex-grow basis-0 min-w-0">
          <MarketingQuantityGraph />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex-grow basis-0 min-w-0">
          <TopAgentBarChart />
        </div>
        <div className="flex-grow basis-0 min-w-0">
          <TopAgentPieChart />
        </div>
      </div>
    </div>
  );
}
