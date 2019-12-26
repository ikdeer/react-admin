import React from 'react'
import Chart from 'chart.js'
import { Card } from 'antd'
import { randomScalingFactor, chartColors } from '../../utils/chartUtils'

class Line1 extends React.Component {
  componentDidMount() {
    let lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'H5商城',
          borderColor: chartColors.red,
          backgroundColor: chartColors.red,
          fill: false,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ],
          yAxisID: 'y-axis-1'
        },
        {
          label: '小程序',
          borderColor: chartColors.blue,
          backgroundColor: chartColors.blue,
          fill: false,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ],
          yAxisID: 'y-axis-2'
        }
      ]
    }

    let ctx = document.getElementById('chart-line1').getContext('2d')
    Chart.Line(ctx, {
      data: lineChartData,
      options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        tooltips: {
          position: 'average',
          mode: 'index',
          intersect: false
        },
        scales: {
          yAxes: [
            {
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-1'
            },
            {
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'right',
              id: 'y-axis-2',

              // grid line settings
              gridLines: {
                drawOnChartArea: false // only want the grid lines for one axis to show up
              }
            }
          ]
        }
      }
    })
  }

  render() {
    return (
      <Card title="平台月访问量" bordered={false}>
        <canvas id="chart-line1"></canvas>
      </Card>
    )
  }
}

export default Line1
