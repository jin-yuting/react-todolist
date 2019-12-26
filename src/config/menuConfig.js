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
            },
            {
                title: 'Alex',
                key: '/admin/ui/alex'
            }
        ]
    },
    {
        title: 'Team',
        key: '/admin/team',
        type: 'team',
        children: [
            {
                title: 'Team 1',
                key: '/admin/team/team1'
            },
            {
                title: 'Team 2',
                key: '/admin/team/team2'
            }
        ]
    }
]
export default menuList;