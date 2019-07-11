import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from '../Component/Nav'
import Weather from '../Component/Weather'
import Thermometer from 'react-thermometer-component'
import MyMenu from '../Component/MyMenu'
import LineChart from '../Component/LineChart'

import './index.less'
class PlantDatas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_position: '实时数据',
            water_data: '79%',
            sun_data: '24.3klux',
            co2_data: '441ppm',
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
            { 'title': '种植数据', 'content': '', 'key': '0', 'Iconfont': 'iconshangdian1' },
            { 'title': '实时数据', 'content': '', 'key': '1', 'Iconfont': 'iconshangdian' },
            { 'title': '历史数据', 'content': '', 'key': '2', 'Iconfont': 'iconshangdian' },
            { 'title': '果园图像', 'content': '', 'key': '3', 'Iconfont': 'iconshangdian' },
            { 'title': '智慧栽培', 'content': '', 'key': '4', 'Iconfont': 'iconshangdian' },
            { 'title': '智能识别', 'content': '', 'key': '5', 'Iconfont': 'iconshangdian' },
            { 'title': '历史数据', 'content': '', 'key': '6', 'Iconfont': 'iconshangdian' },
            { 'title': '病虫害防治', 'content': '', 'key': '7', 'Iconfont': 'iconshangdian' },
            { 'title': '更多功能', 'content': '', 'key': '8', 'Iconfont': 'iconshangdian' }

        ]

        return (
            <div className="plantDatas">
                <Nav></Nav>
                <div className="content">
                    <div className="leftNavPane">
                        <MyMenu
                            data={leftMenu}
                            getClick={this.getClick.bind(this)}
                        ></MyMenu>
                    </div>
                    <div className="main_content">
                        <div className="nav">
                            <span className="title">{this.state.current_position}</span>
                            <div className="position">
                                <span>您的位置: 首页>种植数据>{this.state.current_position}</span>
                            </div>
                        </div>

                        <div className={this.state.show === '1'? 'paneShow' : 'paneHide'}>
                            <div className="environmental_data" >
                                <div>
                                    <span className="timeData">实时数据</span>
                                </div>
                                <div className="weather_thermometer">
                                    <Weather></Weather>
                                    <div className="myThermometer">
                                        <span>温度</span>
                                        <Thermometer
                                            theme="light"
                                            value="90"
                                            max="100"
                                            format="°C"
                                            size="small"
                                            height="100" >
                                        </Thermometer>
                                    </div>
                                    <div className="myHygrometer">
                                        <span>湿度</span>
                                        <Thermometer
                                            theme="light"
                                            value="90"
                                            max="100"
                                            format="%"
                                            size="small"
                                            height="100" >
                                        </Thermometer>
                                    </div>

                                </div>
                                <div className="other_data">
                                    <div><span>土壤水分: </span>{this.state.water_data}</div>
                                    <div><span>光照强度: </span>{this.state.sun_data}</div>
                                    <div><span>CO2浓度： </span>{this.state.co2_data}</div>
                                </div>
                                <div className='three_days_tempAndhumidity'>
                                    <div className='temp'>
                                        <LineChart></LineChart>
                                    </div>
                                    <div className='humidity'>
                                        <LineChart></LineChart>
                                    </div>
                                </div>
                                <div className='three_day_waterAndSun'>
                                    <div className='water'>
                                        <LineChart></LineChart>
                                    </div>
                                    <div className='sun'>
                                        <LineChart></LineChart>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={this.state.show === '2'?'paneShow' : 'paneHide'}>
                            <div className = 'orchard_data'>
                                 
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

