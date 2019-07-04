import React, { Component } from 'react'
import './index.less'
import MyMenu from '../MyMenu'
class LeftNavPane extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let leftMenu = [
            { 'title': '种植数据', 'url': '', 'content': '' , 'key': '1', 'Iconfont': 'iconshangdian1'},
            { 'title': '环境数据', 'url': '', 'content': '' , 'key': '2', 'Iconfont': 'iconshangdian'},
            { 'title': '果园图像', 'url': '', 'content': '' , 'key': '3', 'Iconfont': 'iconshangdian'},
            { 'title': '智慧栽培', 'url': '', 'content': '' , 'key': '4', 'Iconfont': 'iconshangdian'},
            { 'title': '智能识别', 'url': '', 'content': '' , 'key': '5', 'Iconfont': 'iconshangdian'},
            { 'title': '病虫害防治', 'url': '', 'content': '' , 'key': '6', 'Iconfont': 'iconshangdian' },
            { 'title': '更多功能', 'url': '', 'content': '' , 'key': '7', 'Iconfont': 'iconshangdian' }

        ]


        return (
            <div className="leftNavPane">
                <MyMenu
                    data={leftMenu}
                ></MyMenu>
            </div>
        )
    }
}

export default LeftNavPane