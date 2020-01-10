import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
export default {
  formateDate(time){
    if(!time) return '';
    let date = new Date(time);
    return date.getFullYear()+ '-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  },
  pagination(data,callback){
    return {
      onChange:(current)=>{
        callback(current)
      },
      current:data.result.page,
      pageSize:data.result.pageSize,
      total:data.result.total,
      showTotal:()=>{
        return `共${data.total}条`
      },
      showQuickJumper:true
    }
  },
  getOptionList(data){
    if(!data){
      return [];
    }
    let options = [];
    data.map((item)=>{
     options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options
  }
}