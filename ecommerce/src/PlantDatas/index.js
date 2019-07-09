import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from '../Component/Nav'
import LeftNavPane from '../Component/LeftNavPane'
import Weather from '../Component/Weather'
import Thermometer from 'react-thermometer-component'

import './index.less'
class PlantDatas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav_title: '种植数据',
            water_data: '79%',
            sun_data: '24.3klux',
            co2_data: '441ppm'
        }
    }



    render() {
        return (
            <div className="plantDatas">
                <Nav></Nav>
                <div className="content">
                    <LeftNavPane></LeftNavPane>
                    <div className="main_content">
                        <div className="nav">
                            <span className="title">数据分析</span>
                            <div className="position">
                                <span>您的位置:</span>
                            </div>
                        </div>
                        <div>
                            <span className="timeData">实时数据</span>
                        </div>
                        <div className="weather_thermometer">
                            <Weather></Weather>
                            <div className = "myThermometer">
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
                            <div className = "myHygrometer">
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
                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

