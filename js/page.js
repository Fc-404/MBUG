/**
 * * page页功能js
 */


/**
 * * 用户信息
 */
const userInfo = new Vue({
    data: {
        id: 0,
        name: '用户',
        department: '仿真部特战组',
        job: 'C++研发工程师',
        mail: '',
        senior: true,
    }
})


/*
 * bar栏组件
 */
const barItem = {
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
    methods: {
        logout: function(){
            cookie.set('id', '');
            cookie.set('pswd', '');
            window.location.href = '../';
        },
    },
    components: {
        'bar': barItem
    },
    watch: {
        title: function () {
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
        name: '部门管理',
        icon: 'department.svg',
        url: '',
        senior: 1
    },
    {
        id: 6,
        name: '职员管理',
        icon: 'staff.svg',
        url: '',
        senior: 1
    },
]


/* 
* body信息
*/
const bodyInfo = new Vue({
    el: "#body",
    date: {

    }
})