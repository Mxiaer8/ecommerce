import React, { Component } from 'react'
import Nav from '../Component/Nav'
import MyMenu from '../Component/MyMenu'
import ReactDOM from "react-dom";
import SmallNav from '../Component/SmallNav'
import Util from '../Util/util'
import './index.less'
import EcommerceUrl from '../Config/config'
import ecoAxios from '../Config/ecoAxios';

class LitchiProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_position: '产品信息',
            show: 'product',
            standard: '',
            non_standard: ''
        }
    }
    
    componentDidMount() {
        let [menu, menuItem] = Util.getQueryString()
        let [title1, title2] = Util.getMenuName(menuItem)
        this.setState({
            show: menuItem,
            current_position: title2
        })
        this.getLitchiProMsg();
    }

    getLitchiProMsg() {
        //荔枝产品板块接口
        ecoAxios.get(EcommerceUrl.litchiUrl + '5').then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    standard: res.data.data[0].message,
                    non_standard: res.data.data[1].message
                })
                console.log(res.data.data)
            }
        }).catch((err) => {
            console.log(err)
        })
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
            { 'title': '产品信息', 'content': '', 'key': 'product', 'Iconfont': 'iconshangdian' },
            { 'title': '加工技术', 'content': '', 'key': 'machining', 'Iconfont': 'iconshangdian' },
            { 'title': '更多', 'content': '', 'key': 'lichiMore', 'Iconfont': 'iconshangdian' }
        ]


        return (
            <div className='litchi_products'>
                <Nav></Nav>
                <div className="content">
                    <div className="leftNavPane">
                        <MyMenu
                            data={leftMenu}
                            getClick={this.getClick.bind(this)}
                            width={'100%'}
                        ></MyMenu>
                    </div>
                    <div className="main_content">
                        <SmallNav current_position={this.state.current_position}></SmallNav>

                        <div className={this.state.show === 'product' ? 'paneShow' : 'paneHide'}>
                        </div>

                        <div className={this.state.show === 'machining' ? 'paneShow' : 'paneHide'}>
                            <div className='processTechnology_data'>
                                <div className='standard'>
                                    <img src=''></img>
                                    <div className='method'>
                                        <span className='title'>荔枝酒的标准制作方法</span>
                                        <div className='diving_line'></div>
                                        <p>{this.state.standard}</p>
                                    </div>
                                </div>
                                <div className='non_standard'>
                                    <div className='method'>
                                        <span className='title'>荔枝酒的南方制作方法</span>
                                        <div className='diving_line'></div>
                                        <p>{this.state.non_standard}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<LitchiProducts />, document.getElementById("root"));