import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return <Line className="max-[700px]:m-auto" data={chartData} />;
}

export default LineChart;
