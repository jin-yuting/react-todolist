const menuList = [
  {
    title: '首页',
    key: '/admin/home',
    type: 'home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    type: 'coffee',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons'
      },
      {
        title: '弹框',
        key: '/admin/ui/modals'
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
    key: '/admin/table',
    type: 'table',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic'
      }
    ]
  },
  {
    title: '城市管理',
    key: '/admin/table/city',
    type: 'apartment'
  }
]
export default menuList;