import React from "react";
import { Line } from "react-chartjs-2";

const Progress = ({ candidate }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Line data={candidate.progress} height={200}></Line>
    </div>
  );
};

export default Progress;
