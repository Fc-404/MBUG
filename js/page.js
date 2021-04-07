/**
 * * page页功能js
 */

/*
 * bar栏组件
 */
var barItem = {
    template: '#barItem',
    props: ['info'],
}

// * bar页信息应用
const barInfo = new Vue({
    el: '#bars',
    data: {
        title: 'MBUG',
        items: [],
        activeWho: 0,

    },
    components: {
        'bar': barItem
    },
    watch: {
        title: function() {
            document.title = this.title;
        }
    }

})

barInfo.items = [
    {
        id: 0,
        name: 'BUG总览',
        icon: 'warehouse.svg',
        url: '',
        senior: 0
    },
    {
        id: 1,
        name: 'BUG上报',
        icon: 'upload.svg',
        url: '',
        senior: 0
    },
    {
        id: 2,
        name: 'KPI',
        icon: 'data.svg',
        url: '',
        senior: 0
    },
    {
        id: 3,
        name: '项目管理',
        icon: 'project.svg',
        url: '',
        senior: 1
    },
    {
        id: 4,
        name: '环境管理',
        icon: 'environment.svg',
        url: '',
        senior: 1
    },
    {
        id: 5,
        name: '员工管理',
        icon: 'staff.svg',
        url: '',
        senior: 1
    }
]

/**
 * * 用户信息
 */
var userInfo = new Vue({
    el: '#page',
    data: {
        id: 0,
        name: '',
        department: '',
        job: '',
        mail: '',
        senior: 1,
    }
})