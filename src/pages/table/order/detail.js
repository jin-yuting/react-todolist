import React, { Component } from 'react';
import { Card } from 'antd';
import axios from '../../../axios/index';
import './detail.less';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderInfo: {}, //源数据
      page: 1,
    }
  }
  componentDidMount(){
    let orderId = this.props.match.params.userId;
    if(orderId){
      this.getDetailinfo(orderId);
    }
  }
  // 获取详情数据
  getDetailinfo = (orderId) =>{
    axios.ajax({
      url:'/order/detail',
      data:{
        params:{
          orderId
        }
      }
    }).then((res)=>{
      if(res.code === 0){
        this.setState({
          orderInfo: res.result
        })
        this.renderMap(this.state.orderInfo);
      }
    })
  }
  // 添加map
  renderMap = (orderInfo) =>{
    this.map = new window.BMap("orderDetailMap",{enableMapClick:false});
    this.point = new window.BMap.Point(116.404, 39.915);    
    this.map.centerAndZoom(this.point,11);
    this.addMapControl();
    this.drawBikeRoute(orderInfo.positionList);
    this.drawServerArea(orderInfo.area); //服务区方法
  }
  // 添加地图控件
  addMapControl = () =>{
    let map = this.map;
    map.addControl(new window.BMap.ScaleControl({anchor:window.BMAP_ANCHOR_TOP_RIGHT}))
    map.addControl(new window.BMap.NavigationControl({anchor:window.BMAP_ANCHOR_TOP_RIGHT}))
  }
  // 绘制用户的行驶路线
  drawBikeRoute=(positionList)=>{
    let map = this.map;
    let startPoint = '';
    let endPoint = '';
    if(positionList.length){
      let first = positionList[0];
      let last = positionList[positionList.length-1];
      startPoint = new window.BMap.Point(first.lon,first.lat);
      let startMarker = new window.BMap.Marker(startPoint);
      this.map.addOverlay(startMarker);

      endPoint = new window.BMap.Point(last.lon,last.lat);
      let endMarker = new window.BMap.Marker(endPoint);
      this.map.addOverlay(endMarker);

      // 连接路线图
      let trackPoint = [];
      for(let i=0;i<positionList.length;i++){
        let point = positionList[i];
        trackPoint.push(new window.BMap.Point(point.lon,point.lat));
      }

      let polyline = new window.BMap.Polyline(trackPoint,{
        strokeColor: '#1869AD',
        strokeWeight:3,
        strokeOpacity:1
      })
      this.map.addOverlay(polyline);
      this.map.centerAndZoom(endPoint,11);
      
    }
  }
  drawServerArea = (positionList)=>{
    // 连接路线图
    let trackPoint = [];
    for(let i=0;i<positionList.length;i++){
      let point = positionList[i];
      trackPoint.push(new window.BMap.Point(point.lon,point.lat));
    }
    // 绘制服务器
    let polygon = new window.BMap.Polygon(trackPoint,{
      strokeColor: '#CE0000',
      strokeWeight:4,
      strokeOpacity:1,
      FillColor: 'ff8605',
      fillOpacity: 0.4
    })
    this.map.addOverlay(polygon);
  }
  render(){
    return(
    <div>
      <div id="orderDetailMap" className='order-map'></div>
      <Card>
        <div className='card-content'>
          <div className='card-title'>基础信息</div>
          <ul className='item-box'>
            <li>用车模式</li>
            <li>{this.state.orderInfo.mode === 1 ?'服务点':'停车点'}</li>
          </ul>
          <ul className='item-box'>
            <li>订单编号</li>
            <li>{this.state.orderInfo.orderSn}</li>
          </ul>
          <ul className='item-box'>
            <li>车辆编号</li>
            <li>{this.state.orderInfo.bikeSn}</li>
          </ul>
          <ul className='item-box'>
            <li>姓名</li>
            <li>{this.state.orderInfo.userName}</li>
          </ul>
          <ul className='item-box'>
            <li>手机号</li>
            <li>{this.state.orderInfo.mobile}</li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className='card-content'>
          <div className='card-title'>行驶轨迹</div>
          <ul className='item-box'>
            <li>行程起点</li>
            <li>{this.state.orderInfo.startLocation}</li>
          </ul>
          <ul className='item-box'>
            <li>行程终点</li>
            <li>{this.state.orderInfo.endLocation}</li>
          </ul>
          <ul className='item-box'>
            <li>行驶里程</li>
            <li>{this.state.orderInfo.distance/100}公里</li>
          </ul>
        </div>
      </Card>
    </div>
    );
  }
}
export default Detail;