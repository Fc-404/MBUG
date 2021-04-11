/**
 * 作者：夏至
 * 描述：这个函数封装了操作cookie的功能
 *      主要实现可以以对象方式获取cookie
 */

const cookie = {
    result: {},
    init: function () {
        // 解析Cookie
        m = document.cookie;
        m = m.split('; ');
        result = this.result;
        m.forEach(e => {
            map = e.split('=');
            result[map[0]] = map[1];
        });
        return this;
    },
    get: (key = '') => {
        if (key != '') {
            return result[key];
        }
        return result;
    },
    set: (key, value, time = '', path = '/') => {
        document.cookie = key + '=' + value + ';path=' + path + ';expires=' + time;
        console.log(key + '=' + value + ';path=' + path + ';expires=' + time)
        return this;
    }
}.init()