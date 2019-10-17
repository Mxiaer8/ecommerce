import React, { Component } from 'react'
import IconFont from '../../Config/IconFont'
import './index.less'
import Util from '../../Util/util'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'product',
        };

    }

    componentDidMount() {
        let [menu, menuItem] = Util.getQueryString()
        this.setState({
            current: menuItem || menu
        })
    }

    handleClick = e => {
        const plantUrl = '/PlantDatas?' + e.keyPath[0]
        const litchiProductsUrl = '/LitchiProducts?' + e.keyPath[0]
        const litchipCultureUrl = '/LitchiCulture?' + e.keyPath[0]
        if (e.keyPath[1]) {
            switch (e.keyPath[1]) {
                case 'item_1': {
                    window.location.href = plantUrl
                    break
                }
                case 'item_3': {
                    window.location.href = litchiProductsUrl
                    break
                }
                case 'item_4': {
                    window.location.href = litchipCultureUrl
                    break
                }
            }
        } else {
            window.location.href = '/' + e.keyPath[0]
        }
    };


    render() {
        return (
            <div className="top_nav">
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
                            <Menu.Item key="Home"> 首页 </Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">种植数据</span>
                                }
                            >
                                <Menu.Item key="realTime" className="item">实时数据</Menu.Item>
                                <Menu.Item key="history" className="item">历史数据</Menu.Item>
                                <Menu.Item key="garden" className="item">果园图像</Menu.Item>
                                <Menu.Item key="wisdom" className="item">智慧栽培</Menu.Item>
                                <Menu.Item key="intelligence" className="item">智能识别</Menu.Item>
                                <Menu.Item key="pestsAndDiseases" className="item">病虫害防治</Menu.Item>
                                <Menu.Item key="plantMore" className="item">更多功能</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="Fictitious">虚拟果园</Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">荔枝产品</span>
                                }
                            >
                                <Menu.Item key="product" className="item">产品信息</Menu.Item>
                                <Menu.Item key="machining" className="item">加工技术</Menu.Item>
                                <Menu.Item key="lichiMore" className="item">更多</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">荔枝文化</span>
                                }
                            >
                                <Menu.Item key="introduction" className="item">荔枝简介</Menu.Item>
                                <Menu.Item key="valueAnalyse" className="item">价值分析</Menu.Item>
                                <Menu.Item key="cultureMore" className="item">更多</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="About">联系我们</Menu.Item>
                        </Menu>
                    </div>
                </div>

            </div>
        )
    }
}

export default Nav