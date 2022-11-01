import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "../App.css";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const BarChart = ({ income, expense }) => {
  const options = {
    maintainAspectRatio : false
  }
  const labels = ["Expenses", "Balance", "Incomes"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [expense, income - expense, income],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chartss" >
      <Pie width={"400px"}  height={"400px"} data={data} options={options} />
    </div>
  );
};

export default BarChart;
