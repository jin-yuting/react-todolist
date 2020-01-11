import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
import Utils from '../utils/utils';

export default class Axios {
  static requestList(_that,url, params) {
    var data = {
      params: params
    }
    this.ajax({
      url,
      data
    }).then((data) => {
      if (data) {
        _that.setState({
          dataSource: data.result,
          pagination: Utils.pagination(data, (current) => {
            _that.setState({
              page: current
            })
            _that.requestData()
          })
        })
      }
    });
  }
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, res) {
        if (res.status === 'success') {
          resolve(res)
        } else {
          reject(err)
        }
      })
    })
  }
  static ajax(options) {
    let baseApi = 'https://www.easy-mock.com/mock/5e0c3e6a4a88482f2c4ceb24/mockapi'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (response.status === 200) {
          let res = response.data;
          if (res.code === 0) {
            resolve(res);
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data);
        }
      }).catch((e) => {
        console.log(e)
      })
    })
  }
} 