import React, { Component } from 'react'
import IconFont from '../../Config/IconFont'
import './index.less'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            current: 'mail',
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
                    <span>您好， 山顶村荔枝生成物联网平台欢迎您！</span>
                    <div className="login_register">
                        <span><IconFont type="iconjinru" />登录</span>
                        <span><IconFont type="iconzhuce" />注册</span>
                    </div>
                </div>
                <div className="menu">
                    <img></img>
                    <div className="menu_item">
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="mail">
                                <Icon type="mail" />
                                Navigation One
                                 </Menu.Item>
                            <Menu.Item key="app" disabled>
                                <Icon type="appstore" />
                                Navigation Two
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="setting" />
                                        Navigation Three - Submenu
                                    </span>
                                }
                            >
                                <Menu.ItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                    Navigation Four - Link
                                </a>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>

            </div>
        )
    }
}

export default Nav