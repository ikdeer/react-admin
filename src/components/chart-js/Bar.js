import React from 'react'
import Chart from 'chart.js'
import { Card } from 'antd'
import { randomScalingFactor, chartColors } from '../../utils/chartUtils'

class Bar extends React.Component {
  componentDidMount() {
    var color = Chart.helpers.color
    var barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '销量',
          backgroundColor: color(chartColors.red)
            .rgbString(),
          borderColor: chartColors.red,
          borderWidth: 1,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ]
        }
      ]
    }

    var ctx = document.getElementById('c-chart-bar1').getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: '苹果销量'
        }
      }
    })
  }
  render() {
    return (
      <Card title="苹果销量" bordered={false}>
        <canvas id="c-chart-bar1"></canvas>
      </Card>
    )
  }
}

export default Bar
