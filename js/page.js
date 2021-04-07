/**
 * * page页功能js
 */

// * bar栏组件
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
        name: 'BUG总览'
    },
    {
        id: 1,
        name: 'BUG记录'
    },
    {
        id: 2,
        name: 'KPI'
    },
]