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
      dt1.push({ x: "Completed", y: dayWiseTaskNumberCompleted });
      dt1.push({ x: "Not Yet Completed", y: dayWiseTaskNumberNotCompleted });
      const data = {
        labels: ["Completed", "NotYetComplete"],
        datasets: [
          {
            label: "# of Tasks",
            data: [dayWiseTaskNumberCompleted, dayWiseTaskNumberNotCompleted],
            backgroundColor: ["rgb(52 211 153)", "rgb(251 146 60)"],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      };
      setData1(dt1);
      setOption(data);
    }
  }, [events]);
  return (
    <>
      {option ? (
        <div className="w-full doughnut-chart flex justify-center">
          {/* <Doughnut
            data={option}
            options={{ maintainAspectRatio: false, responsive: true }}
          /> */}

          <VictoryPie
            style={{ labels: { fill: "white" } }}
            innerRadius={80}
            labelRadius={100}
            labels={({ datum }) => `# ${datum.y}`}
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
