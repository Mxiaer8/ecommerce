import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd'
import IconFont from '../../Config/IconFont'

const { SubMenu } = Menu;

class MyMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'home',
            mode: 'inline',
            data: this.props.data
        };
    }

    handleClick = e => {
        this.props.getClick(e)
        this.setState({
            current: e.key,
        });
    };

    render() {
        const menus = this.state.data
        return (
            <div className='myMenu'>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode={this.state.mode}>
                    {
                        menus.map((item, index) => {
                            if (item.content) {
                                return (
                                    <SubMenu
                                        key={index}
                                        title={
                                            <span className="submenu-title-wrapper">{item.title}</span>
                                        }
                                    >
                                        {
                                            item.content.map((menus, index) => {
                                                return (
                                                    <Menu.Item key={menus.key} className="item">
                                                        {menus.title}
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )

                            } else {
                                return (
                                    <Menu.Item key={item.key} className="myMenuItem">
                                        <IconFont type={item.Iconfont} /> <span>{item.title}</span>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </div>

        )
    }
}

export default MyMenu