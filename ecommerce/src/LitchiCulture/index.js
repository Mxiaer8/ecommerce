import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Nav from '../Component/Nav'
import MyMenu from '../Component/MyMenu'
import Util from '../Util/util'
import './index.less'
import SmallNav from '../Component/SmallNav'

class LitchiCulture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_position: '荔枝简介',
            show: '1'
        }
    }

    componentDidMount() {
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


                        <div className={this.state.show === '1' ? 'paneShow' : 'paneHide'}>
                            <div className='lichiIntroduction_data'>
                                <span className='title'>荔枝简介</span>
                                <div className='diving_line'></div>
                                <p>这是荔枝简介啊啊啊啊啊啊啊啊啊让我方法我发给我发我复活复活复活我和我if和我玩iehihfwf服务费和我ihqrrqrij 改革和共和如何古尔化工</p>
                            </div>

                            <div className='lichiOrigin_data'>
                                <span className='title'>起源于传播</span>
                                <div className='diving_line'></div>
                                <p>这是荔枝简介啊啊啊啊啊啊啊啊啊让我方法我发给我发我复活复活复活我和我if和我玩iehihfwf服务费和我ihqrrqrij 改革和共和如何古尔化工</p>
                            </div>
                        </div>

                        <div className={this.state.show === '1' ? 'paneShow' : 'paneHide'}>
                            <div className='valueAnalysis_data'>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<LitchiCulture />, document.getElementById("root"));