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
                key: '/admin/ui/bill'
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