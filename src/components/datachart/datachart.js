import React, { Component } from "react";
import Chart from "chart.js";

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.myChart = undefined;
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    let { dataArr, labelsArr } = this.props;
    dataArr = dataArr === undefined || dataArr.length === 0 ? [0] : dataArr;
    labelsArr =
      labelsArr === undefined || labelsArr.length === 0
        ? ["Chart Unavailable"]
        : labelsArr;
    this.myChart = new Chart(this.canvasRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels: labelsArr,
        datasets: [
          {
            data: dataArr,
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

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart = () => {
    const { labelsArr, dataArr } = this.props;
    this.myChart.data.labels = labelsArr;
    this.myChart.data.datasets[0].data = dataArr;
    this.myChart.update();
  };
  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default DataChart;
