import React, { Component } from 'react'
import './index.less'
import MyMenu from '../MyMenu'
class LeftNavPane extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let leftMenu = [
            {
                'title': '种植数据', 'url': '',
                'content': [
                    { 'title': '环境数据', 'key': '1' },
                    { 'title': '果园图像', 'key': '2' },
                    { 'title': '智慧栽培', 'key': '3' },
                    { 'title': '智能识别', 'key': '4' },
                    { 'title': '病虫害防治', 'key': '5' },
                    { 'title': '更多功能', 'key': '6' }
                ]
            }
        ]


        return(
            <div className = "leftNavPane">
                 <MyMenu
                    data = {leftMenu}
                 ></MyMenu>
            </div>
        )
    }
}

export default LeftNavPane