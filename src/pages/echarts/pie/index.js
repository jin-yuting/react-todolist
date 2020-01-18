import React from 'react';
import { Card, Row, Col } from 'antd';
// 按需加载
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import ReactEcharts from "echarts-for-react";

export default class Pie extends React.Component {
  componentDidMount() {
    // 可以定制主体
  }
  getOption1 = () => {
    let option = {
      title: {
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
        data: ['周一', '周二', '周三', '周四', '周五'],
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: '55%',
          center: ['30%', '60%'],
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
      title: {
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
        data: ['周一', '周二', '周三', '周四', '周五'],
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
  getOption3 = () => {
    let option = {
      title: {
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
        data: ['周一', '周二', '周三', '周四', '周五'],
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          data: [
            { value: 335, name: '周一' },
            { value: 310, name: '周二' },
            { value: 274, name: '周三' },
            { value: 235, name: '周四' },
            { value: 400, name: '周五' }
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
    return option;
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Card title='饼图之一'>
              <ReactEcharts option={this.getOption1()}></ReactEcharts>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='饼图之二'>
              <ReactEcharts option={this.getOption2()}></ReactEcharts>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Card title='饼图之三'>
              <ReactEcharts option={this.getOption3()}></ReactEcharts>
            </Card>
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
    )
  }
}