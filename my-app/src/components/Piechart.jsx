import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../css/Pie.css';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}) => {
  // Set up chart data and options
  const chartData = {
    labels: data.labels, // Labels for each section of the doughnut
    datasets: [
      {
        data: data.values, // Data for each section
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each section
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Hover effect colors
      },
    ],
  };

  console.log(data);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="pie-chart-page">
      <div className="chart-box-container">
        <div className="chart-container">
          <Doughnut data={chartData} options={options}/>
        </div>

        <div className="info-box-container">
        <div className="info-box">
          <h4>Top 3 Holder Percentage</h4>
          <br></br>
          <h5>{(data.values[0] + data.values[1] + data.values[2]).toFixed(2)}%</h5>
        </div>
        
        <div className="info-box">
          <h4>Top 10 Holder Percentage</h4>
          <br></br>
          <h5>{(data.values[0] + data.values[1] + data.values[2] + data.values[3] + data.values[4] + data.values[5] + data.values[6] + data.values[7] + data.values[8] + data.values[9]).toFixed(2)}%</h5>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PieChart;
