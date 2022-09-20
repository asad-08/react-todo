import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { getAllTasks } from "../../store/task/taskSlice";
import {
  VictoryLabel,
  VictoryLegend,
  VictoryPie,
  VictoryTooltip,
} from "victory";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const events = useSelector(getAllTasks);
  const [option, setOption] = useState(null);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    if (events && events.length > 0) {
      let dt1 = [];
      let data2 = [];
      let dayWiseTaskNumberCompleted =
        events &&
        events.length > 0 &&
        events.filter((x) => x.isCompleted == true).length;
      let dayWiseTaskNumberNotCompleted =
        events &&
        events.length > 0 &&
        events.filter((x) => x.isCompleted == false).length;
      if (dayWiseTaskNumberCompleted > 0)
        dt1.push({
          x: "C",
          y: dayWiseTaskNumberCompleted,
          color: "rgb(52 211 153)",
        });
      if (dayWiseTaskNumberNotCompleted > 0)
        dt1.push({
          x: "NC",
          y: dayWiseTaskNumberNotCompleted,
          color: "rgb(251 146 60)",
        });

      setData1(dt1);
    }
  }, [events]);
  return (
    <>
      {data1 && data1.length > 0 ? (
        <div className="w-full doughnut-chart flex justify-center">
          {/* <Doughnut
            data={option}
            options={{ maintainAspectRatio: false, responsive: true }}
          /> */}

          <VictoryPie
            style={{
              labels: { fill: "white" },
              data: { fill: (d) => d.datum.color },
            }}
            innerRadius={80}
            labelRadius={100}
            labels={({ datum }) => `${datum.x} # ${datum.y}`}
            labelComponent={<CustomLabel />}
            data={data1}
          />
        </div>
      ) : (
        <label className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          You have no Task to do.
        </label>
      )}
    </>
  );
}
class CustomLabel extends React.Component {
  render() {
    return (
      <g>
        <VictoryLabel {...this.props} />
        <VictoryTooltip
          {...this.props}
          x={200}
          y={250}
          orientation="top"
          pointerLength={0}
          cornerRadius={50}
          flyoutWidth={100}
          flyoutHeight={100}
          flyoutStyle={{ fill: "rgb(52 211 153)" }}
        />
      </g>
    );
  }
}
CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
export default DoughnutChart;
