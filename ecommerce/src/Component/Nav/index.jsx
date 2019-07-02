import React, {Component} from 'react'
import { Icon } from 'antd';
import './index.less'
class Nav extends Component {
    constructor() {
        super()
    }

    componentDidMount() {

    }


    render() {
        return(
            <div className = "nav">
                <div className = "nav_top">
                    <span>您好， 山顶村荔枝生成物联网平台欢迎您！</span>
                </div>
                <div className = "login_register">
                    <Icon type="home"></Icon><span>登陆</span>
                    <span>注册</span>
                </div>
            </div>
        )
    }
}

export default Nav