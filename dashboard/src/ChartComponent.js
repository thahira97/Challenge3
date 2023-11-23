import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController } from 'chart.js/auto';

const MyChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Get the canvas element using the ref
    const ctx = chartRef.current.getContext('2d');

    // Replace the following with your actual chart data and configuration
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [{
        data: [50, 20, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        weight: 500,

      }],
    };

    const options = {
   cutout: '50%',
   borderWidth: 10,
   width: 300,
   height: 200,
    };

    // Register the DoughnutController
    Chart.register(DoughnutController);

    // Create a new chart instance with the specific controller
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <canvas
      id="organizationChallenge-chart"
      ref={chartRef}
      width={10}  // Set the initial width
      height={10} // Set the initial height
      style={{ display: 'block', height: '10px', width: '10px' }}
      className="chartjs-render-monitor"
    >
      {/* Fallback content for browsers that do not support canvas */}
      Your browser does not support the canvas element.
    </canvas>
  );
};

export default MyChartComponent;

