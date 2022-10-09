import React from "react";

import MarketingQuantityTable from "./components/marketing-quantity-table";
import MarketingQuantityGraph from "./components/marketing-quantity.graph";
import TopAgentBarChart from "./components/top-agent-bar-chart";
import TopAgentPieChart from "./components/top-agent-pie-chart";

export function Homepage() {
  return (
    <>
      <div className="p-12">
        <div className="flex lg:flex-row gap-6 flex-col">
          <div className="flex-1">
            <MarketingQuantityTable />
          </div>
          <div className="flex-1">
            <MarketingQuantityGraph />
          </div>
        </div>
        <div className="flex lg:flex-row gap-6 flex-col">
          <div className="flex-1">
            <TopAgentBarChart />
          </div>
          <div className="flex-1">
            <TopAgentPieChart />
          </div>
        </div>
      </div>
    </>
  );
}
