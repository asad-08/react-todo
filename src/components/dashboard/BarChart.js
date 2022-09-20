import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllTasks } from "../../store/task/taskSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryLegend,
} from "victory";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  plugins: {
    title: {
      display: true,
      text: "Last 7 Days Task Status",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
function BarChart() {
  const events = useSelector(getAllTasks);
  const [barOption, setBarOption] = useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    if (events && events.length > 0) {
      let labels = [];
      let d1 = [];
      let d2 = [];
      for (let i = 6; i >= 0; i--) {
        let dt = moment().add(-i, "days").format("YYYY-MM-DD");
        labels.push(moment().add(-i, "days").format("DD-MMM"));
        let dayWiseTaskNumberCompleted =
          events &&
          events.length > 0 &&
          events.filter((x) => x.selectedDate == dt && x.isCompleted == true)
            .length;
        let dayWiseTaskNumberNotCompleted =
          events &&
          events.length > 0 &&
          events.filter((x) => x.selectedDate == dt && x.isCompleted == false)
            .length;
        d1.push(dayWiseTaskNumberCompleted);
        d2.push(dayWiseTaskNumberNotCompleted);
      }
      //   const data = {
      //     labels,
      //     datasets: [
      //       {
      //         label: "Completed Task",
      //         data: data1,
      //         backgroundColor: "rgb(52 211 153)",
      //       },
      //       {
      //         label: "Not Yet Complete",
      //         data: data2,
      //         backgroundColor: "rgb(251 146 60)",
      //       },
      //     ],
      //   };
      setLabels(labels);
      setData1(d1);
      setData2(d2);

      //   setBarOption(data);
    }
  }, [events]);

  return (
    <>
      {(data1 && data1.length > 0) || (data2 && data2.length > 0) ? (
        <div className="w-full flex justify-center bar-chart">
          <VictoryChart
            domainPadding={0}
            theme={VictoryTheme.material}
            // theme={VictoryTheme.material}
          >
            <VictoryLegend
              x={50}
              y={0}
              centerTitle
              orientation="horizontal"
              gutter={50}
              style={{ border: { stroke: "black" } }}
              colorScale={["rgb(52 211 153)", "rgb(251 146 60)"]}
              data={[{ name: "Completed" }, { name: "Not Completed" }]}
            />
            <VictoryAxis tickFormat={labels} />
            <VictoryAxis dependentAxis />
            <VictoryStack colorScale={"warm"}>
              <VictoryBar
                data={data1}
                x="Date"
                y="# of Task"
                style={{ data: { fill: "rgb(52 211 153)" } }}
              />
              <VictoryBar
                data={data2}
                x="Date"
                y="# of Task"
                style={{ data: { fill: "rgb(251 146 60)" } }}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
      ) : (
        <label className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          You have no Task to do.
        </label>
      )}
    </>
  );
}

export default BarChart;
