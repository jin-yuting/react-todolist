const menuList = [
  {
    title: '首页',
    key: '/home',
    type: 'home'
  },
  {
    title: 'UI',
    key: '/ui',
    type: 'smile',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons'
      },
      {
        title: '弹框',
        key: '/ui/modals'
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    type: 'bars',
    children: [
      {
        title: '登陆',
        key: '/login'
      },
      {
        title: '注册',
        key: '/register'
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    type: 'table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic'
      }
    ]
  },
  {
    title: '城市管理',
    key: '/table/city',
    type: 'apartment'
  },
  {
    title: '订单管理',
    key: '/table/order',
    type: 'profile'
  },
  {
    title: '富文本',
    key: '/draft',
    type: 'edit'
  },
  {
    title: '图表',
    key: '/echarts',
    type: 'radar-chart',
    children: [
      {
        title: '柱状图',
        key: '/echarts/bar'
      },
      {
        title: '饼图',
        key: '/echarts/pie'
      },
      {
        title: '折线图',
        key: '/echarts/line'
      }
    ]
  },
  {
    title: '权限管理',
    key: '/persimission',
    type: 'user'
  },
]
export default menuList;