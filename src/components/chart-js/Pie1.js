import React from 'react'
import Chart from 'chart.js'
import { Card } from 'antd'
import { chartColors } from '../../utils/chartUtils'

class Pie1 extends React.Component {
  componentDidMount() {
    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100)
    }

    var config = {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue
            ],
            label: 'Dataset 1'
          }
        ],
        labels: ['拼团小程序', 'm站', '批发市场', 'shop', '优供']
      },
      options: {
        responsive: true
      }
    }

    var ctx = document.getElementById('c-chart-pie1').getContext('2d')
    new Chart(ctx, config)
  }
  render() {
    return (
      <Card title="平台用户占比" bordered={false}>
        <canvas id="c-chart-pie1"></canvas>
      </Card>
    )
  }
}

export default Pie1
