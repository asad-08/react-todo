import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

function Dashboard() {
  return (
    <div className="w-full mt-[60px] p-4">
      <div className="flex items-center gap-6 flex-col md:flex-row">
        <div className="w-1/2 border-2 rounded-lg p-2">
          <BarChart />
        </div>
        <div className="w-1/2 border-2 rounded-lg p-2">
          <DoughnutChart />
        </div>
        <div className="w-1/2 border-2 rounded-lg p-2">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
