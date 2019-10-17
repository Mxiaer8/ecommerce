import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Nav from '../Component/Nav'
import MyMenu from '../Component/MyMenu'
import Util from '../Util/util'
import './index.less'
import SmallNav from '../Component/SmallNav'
import EcommerceUrl from '../Config/config'
import ecoAxios from '../Config/ecoAxios';

class LitchiCulture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_position: '荔枝简介',
            show: 'introduction',
            litchiIntroduce: '',
            litchiOrigin: '',
            valueAnalysis: ''
        }
    }

    componentDidMount() {
        let [menu, menuItem] = Util.getQueryString()
        let [title1, title2] = Util.getMenuName(menuItem)
        this.setState({
            show: menuItem,
            current_position: title2
        })
        if (menuItem == 'introduction') {
            this.getLitchiMsg();
        }
        this.getLitchiMsg();
    }


    // 获取用户点击左部导航栏的结果
    getClick(e) {
        const title = e.domEvent.target.innerText
        if (e.key === '0') return
        this.setState({
            show: e.key,
            current_position: title
        })
        if (e.key == 'introduction') {
            this.getLitchiMsg();
        }
    }

    getLitchiMsg() {
        //荔枝文化板块接口
        ecoAxios.get(EcommerceUrl.litchiUrl + '1').then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    litchiIntroduce: res.data.data[0].message,
                    litchiOrigin: res.data.data[1].message
                })
                console.log(res.data.data)
            }
        }).catch((err) => {
            console.log(err)
        })
        ecoAxios.get(EcommerceUrl.litchiUrl + '2').then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    valueAnalysis: res.data.data[0].message
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const leftMenu = [
            { 'title': '荔枝文化', 'content': '', 'key': '0', 'Iconfont': 'iconshangdian1' },
            { 'title': '荔枝简介', 'content': '', 'key': 'introduction', 'Iconfont': 'iconshangdian' },
            { 'title': '价值分析', 'content': '', 'key': 'valueAnalyse', 'Iconfont': 'iconshangdian' },
            { 'title': '更多', 'content': '', 'key': 'cultureMore', 'Iconfont': 'iconshangdian' }
        ]
        return (
            <div className='litchi_culture'>
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


                        <div className={this.state.show === 'introduction' ? 'paneShow' : 'paneHide'}>
                            <div className='lichiIntroduction_data'>
                                <span className='title'>荔枝简介</span>
                                <div className='diving_line'></div>
                                <p>{this.state.litchiIntroduce}</p>
                            </div>

                            <div className='lichiOrigin_data'>
                                <span className='title'>起源于传播</span>
                                <div className='diving_line'></div>
                                <p>{this.state.litchiOrigin}</p>
                            </div>
                        </div>

                        <div className={this.state.show === 'valueAnalyse' ? 'paneShow' : 'paneHide'}>
                            <div className='valueAnalysis_data'>
                                <span className='title'>价值分析</span>
                                <div className='diving_line'></div>
                                <p>{this.state.valueAnalysis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<LitchiCulture />, document.getElementById("root"));