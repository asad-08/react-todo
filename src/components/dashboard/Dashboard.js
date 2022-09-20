import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

function Dashboard() {
  return (
    <div className="w-full mt-[60px] p-4">
      <div className="flex items-center gap-6 flex-col md:flex-row">
        <div className="w-full md:w-1/2 border-2 rounded-lg p-2 flex flex-col">
          <label className="text-xl font-semibold text-slate-700 dark:text-slate-100">
            Last 7 Days Task
          </label>
          <BarChart />
        </div>
        <div className="w-full md:w-1/2 border-2 rounded-lg p-2 flex flex-col">
          <label className="text-xl font-semibold text-slate-700 dark:text-slate-100">
            Task of All Times
          </label>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
