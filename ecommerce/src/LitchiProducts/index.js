import React, { Component } from 'react'
import Nav from '../Component/Nav'
import MyMenu from '../Component/MyMenu'
import ReactDOM from "react-dom";


class LitchiProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_position: '产品信息',
            show: '1'
        }
    }

    // 获取用户点击左部导航栏的结果
    getClick(e) {
        const title = e.domEvent.target.innerText
        if (e.key === '0') return
        this.setState({
            show: e.key,
            current_position: title
        })

    }

    render() {
        const leftMenu = [
            { 'title': '荔枝产品', 'content': '', 'key': '0', 'Iconfont': 'iconshangdian1' },
            { 'title': '产品信息', 'content': '', 'key': '1', 'Iconfont': 'iconshangdian' },
            { 'title': '加工技术', 'content': '', 'key': '2', 'Iconfont': 'iconshangdian' }
        ]


        return (
            <div className='litchi_products'>
                <Nav></Nav>
                <div className="content">
                    <div className="leftNavPane">
                        <MyMenu
                            data={leftMenu}
                            getClick={this.getClick.bind(this)}
                        ></MyMenu>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<LitchiProducts />, document.getElementById("root"));