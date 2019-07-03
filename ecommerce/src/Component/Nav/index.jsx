import React, { Component } from 'react'
import IconFont from '../../Config/IconFont'
import './index.less'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            current: 'home',
        };

    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    componentDidMount() {

    }


    render() {
        return (
            <div className="nav">
                <div className="nav_top">
                    <span>您好， 山顶村荔枝生产物联网平台欢迎您！</span>
                    <div className="login_register">
                        <span><IconFont type="iconjinru" />登录</span>
                        <span><IconFont type="iconzhuce" />注册</span>
                    </div>
                </div>
                <div className="menu">
                    <div className="logo">
                        <img src={require('../../static/images/logo.png')}></img>
                    </div>
                    <div className="menu_item">
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home">
                                <a href='/Home'>首页</a>
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper plantDatas">种植数据</span>
                                }
                            >
                                <Menu.Item key="setting:1" className="item">环境数据</Menu.Item>
                                <Menu.Item key="setting:2" className="item">果园图像</Menu.Item>
                                <Menu.Item key="setting:3" className="item">智慧栽培</Menu.Item>
                                <Menu.Item key="setting:5" className="item">智能识别</Menu.Item>
                                <Menu.Item key="setting:6" className="item">病虫害防治</Menu.Item>
                                <Menu.Item key="setting:7" className="item">更多功能</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper plantDatas">荔枝产品</span>
                                }
                            >
                                <Menu.Item key="setting:8" className="item">产品信息</Menu.Item>
                                <Menu.Item key="setting:9" className="item">加工技术</Menu.Item>
                                <Menu.Item key="setting:10" className="item">更多</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper plantDatas">荔枝文化</span>
                                }
                            >
                                <Menu.Item key="setting:11" className="item">荔枝简介</Menu.Item>
                                <Menu.Item key="setting:12" className="item">价值分析</Menu.Item>
                                <Menu.Item key="setting:13" className="item">更多</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="contract">联系我们</Menu.Item>
                        </Menu>
                    </div>
                </div>

            </div>
        )
    }
}

export default Nav