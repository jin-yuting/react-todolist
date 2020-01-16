import React from 'react';
import { Card } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from "echarts-for-react";

export default class Bar extends React.Component {
  componentDidMount() {
  }
  getOption1 = () => {
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      title: {
        text: '用户骑行订单'
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '订单量',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    }
    return option;
  }
  getOption2 = () => {
    let option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      title: {
        text: '用户骑行订单'
      },
      dataset: {
        source: [
          ['product', 'ofo', '膜拜', '小蓝'],
          ['周一', 43.3, 85.8, 93.7],
          ['周二', 83.1, 73.4, 55.1],
          ['周三', 86.4, 65.2, 82.5],
          ['周四', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
      ]
    }
    return option;
  }
  render() {
    return (
      <div>
        <Card title='柱形图之一'>
          <ReactEcharts option={this.getOption1()}></ReactEcharts>
        </Card>
        <Card title='柱形图之二'>
          <ReactEcharts option={this.getOption2()}></ReactEcharts>
        </Card>
      </div>
    )
  }
}