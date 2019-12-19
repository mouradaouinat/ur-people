import React from "react";
import { Line } from "react-chartjs-2";

const Progress = () => {
  const data = {
    datasets: [
      {
        borderColor: "#F5A623",
        lineTension: 0.4,
        data: [
          "30",
          "35",
          "26",
          "50",
          "66",
          "30",
          "63",
          "70",
          "90",
          "30",
          "10",
          "44"
        ],
        label: "Tech",
        fill: false
      },
      {
        borderColor: "#7ED321",
        lineTension: 0.4,
        data: [
          "20",
          "70",
          "40",
          "60",
          "30",
          "46",
          "90",
          "80",
          "40",
          "59",
          "40",
          "66"
        ],
        label: "Product",
        fill: false
      },
      {
        borderColor: "#8B572A",
        lineTension: 0.4,
        data: [
          "13",
          "40",
          "50",
          "40",
          "90",
          "50",
          "44",
          "16",
          "80",
          "90",
          "10",
          "50"
        ],
        label: "Communication",
        fill: false
      }
    ],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Line data={data} height={200}></Line>
    </div>
  );
};

export default Progress;
