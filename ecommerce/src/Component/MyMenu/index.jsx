import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd'


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
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const menus = this.state.data
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode={this.state.mode}>

                {
                    // console.log(menus)
                    menus.map((item, index) => {
                        if (item.content) {
                            console.log(item.content)
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
                                                <Menu.Item key={menus.key} className="item">{menus.title}</Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )

                        } else {
                            return (
                                <Menu.Item key={item.key}><a href={item.url}>{item.title}</a></Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}

export default MyMenu