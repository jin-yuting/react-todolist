const menuList = [
    {
        title: '首页',
        key: '/admin',
        type: 'pie-chart'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        type: 'user',
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
        title: 'form表单',
        key: '/',
        type: 'team',
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
        key: '/admin',
        type: 'team',
        children: [
            {
                title: '基础表格',
                key: '/admin/table'
            }
        ]
    }
]
export default menuList;