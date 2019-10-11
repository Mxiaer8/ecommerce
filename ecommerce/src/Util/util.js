export default class Util {

    // 获取url参数的值 (最后/后面的文件名 与 第一个?后面的参数)
    static getQueryString(name) {
        // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        // var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
        // if (r != null) return unescape(r[2]); return null;
        let url = name || window.location.href 
        let urlArr = url.split('?')
        let menu = urlArr[0].split('/')
        console.log(menu[menu.length - 1])
        return [menu[menu.length - 1], urlArr[1]]
    }

    //根据菜单的key值获取菜单名
    static getMenuName(key) {
        console.log(key)
        let [name1, name2] = ['', '']
        switch(key) {
            case 'realTime': {
                [name1, name2] = ['种植数据', '实时数据']
                break
            }
            case 'history': {
                [name1, name2] = ['种植数据', '历史数据']
                break
            }
            case 'garden': {
                [name1, name2] = ['种植数据', '果园图像']
                break
            }
            case 'wisdom': {
                [name1, name2] = ['种植数据', '智慧栽培']
                break
            }
            case 'intelligence': {
                [name1, name2] = ['种植数据', '智能识别']
                break
            }
            case 'pestsAndDiseases': {
                [name1, name2] = ['种植数据', '病虫害防治']
                break
            }
            case 'plantMore': {
                [name1, name2] = ['种植数据', '更多功能']
                break
            }
            case 'product': {
                [name1, name2] = ['荔枝产品', '产品信息']
                break
            }
            case 'machining': {
                [name1, name2] = ['荔枝产品', '加工技术']
                break
            }
            case 'lichiMore': {
                [name1, name2] = ['荔枝产品', '更多']
                break
            }
            case 'introduction': {
                [name1, name2] = ['荔枝文化', '荔枝简介']
                break
            }
            case 'valueAnalyse': {
                [name1, name2] = ['荔枝文化', '价值分析']
                break
            }
            case 'cultureMore': {
                [name1, name2] = ['荔枝文化', '更多']
                break
            }
            default: {
                break
            }
        }
        return [name1, name2]
    }
}