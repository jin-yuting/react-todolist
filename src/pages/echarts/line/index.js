import React from 'react';
import { Card, Row, Col } from 'antd';
// 按需加载
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import ReactEcharts from "echarts-for-react";

export default class Line extends React.Component {
  componentDidMount() {
    // 可以定制主体
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
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
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
        data: ['ofo订单量', '膜拜订单量']
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'ofo订单量',
          type: 'line',
          data: [
            { value: 335, name: '周一' },
            { value: 310, name: '周二' },
            { value: 234, name: '周三' },
            { value: 135, name: '周四' },
            { value: 508, name: '周五' }
          ]
        },
        {
          name: '膜拜订单量',
          type: 'line',
          data: [
            { value: 235, name: '周一' },
            { value: 110, name: '周二' },
            { value: 334, name: '周三' },
            { value: 235, name: '周四' },
            { value: 548, name: '周五' }
          ]
        }
      ]
    }
    return option;
  }
  getOption3 = () => {
    let option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290],
        type: 'line',
        areaStyle: {}
      }]
    }
    return option;
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Card title='折线图之一'>
              <ReactEcharts option={this.getOption1()}></ReactEcharts>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='折线图之二'>
              <ReactEcharts option={this.getOption2()}></ReactEcharts>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Card title='折线图之三'>
              <ReactEcharts option={this.getOption3()}></ReactEcharts>
            </Card>
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
    )
  }
}