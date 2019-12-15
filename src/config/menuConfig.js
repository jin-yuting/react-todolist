const menuList = [
    {
        title: '首页',
        key: '/',
        type: 'pie-chart'
    },
    {
        title: 'User',
        key: '/admin/ui',
        type: 'user',
        children: [
            {
                title: 'Tom',
                key: '/admin/ui/buttons'
            },
            {
                title: 'Bill',
                key: '/admin/ui/ui/modals'
            },
            {
                title: 'Alex',
                key: '/admin/ui/ui/modals'
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
                key: '/admin/ui/buttons'
            },
            {
                title: 'Team 2',
                key: '/admin/ui/ui/modals'
            }
        ]
    }
]
export default menuList;