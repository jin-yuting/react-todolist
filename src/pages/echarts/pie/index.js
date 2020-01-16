import React from 'react';
import { Card } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from "echarts-for-react";

export default class Pie extends React.Component {
  componentDidMount() {
  }
  getOption1 = () => {
    let option = {
      title: '用户骑行订单', title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          data: [
            { value: 335, name: '周一' },
            { value: 310, name: '周二' },
            { value: 234, name: '周三' },
            { value: 135, name: '周四' },
            { value: 1548, name: '周五' }
          ]
        }
      ]
    }
    return option;
  }
  getOption2 = () => {
    let option = {
      title: '用户骑行订单', title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          data: [
            { value: 335, name: '周一' },
            { value: 310, name: '周二' },
            { value: 234, name: '周三' },
            { value: 135, name: '周四' },
            { value: 1548, name: '周五' }
          ]
        }
      ]
    }
    return option;
  }
  render() {
    return (
      <div>
        <Card title='饼图之一'>
          <ReactEcharts option={this.getOption1()}></ReactEcharts>
        </Card>
        <Card title='饼图之二'>
          <ReactEcharts option={this.getOption2()}></ReactEcharts>
        </Card>
      </div>
    )
  }
}