import React, { Component } from "react";
import Chart from "chart.js";

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.myChart = undefined;
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [1, 4, 3, 5, 2, 3, 10, 7, 8, 9, 19, 25],
            pointBackgroundColor: "rgba(23, 162, 184, 0.5)",
            backgroundColor: "rgba(23, 162, 184, 0.5)",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default DataChart;
