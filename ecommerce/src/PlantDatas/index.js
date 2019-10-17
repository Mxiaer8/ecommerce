import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Select } from 'antd';
import Nav from '../Component/Nav'
import Weather from '../Component/Weather'
import Thermometer from 'react-thermometer-component'
import MyMenu from '../Component/MyMenu'
import LineChart from '../Component/LineChart'
import { DatePicker, Button } from 'antd'
import PointBox from '../Component/PointBox'
import IconFont from '../Config/IconFont'
import SmallNav from '../Component/SmallNav'
import './index.less'
import Util from '../Util/util'
import EcommerceUrl from '../Config/config'
import moment from 'moment';
import ecoAxios from '../Config/ecoAxios';
import { func } from 'prop-types';
import axios from '../Config/ecoAxios';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;

class PlantDatas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_position: '实时数据',
            water_data: '79%',
            sun_data: '24.3klux',
            co2_data: '441ppm',
            show: 'realTime',
            pestsArray: [],
            diseasesArray: []
        }
    }

    componentDidMount() {
        let [menu, menuItem] = Util.getQueryString()
        let [title1, title2] = Util.getMenuName(menuItem)
        this.setState({
            show: menuItem,
            current_position: title2
        })
        if (menuItem == 'pestsAndDiseases') {
            this.getPestsAndDiseases()
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
        if (e.key == 'pestsAndDiseases') {
            this.getPestsAndDiseases()
        }

    }

    // 获取病虫害防治数据
    getPestsAndDiseases() {
        //虫害
        ecoAxios.get(EcommerceUrl.pestsUrl).then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    pestsArray: res.data.data
                })
            }
        }).catch((err) => {
            console.log(err)
        })
        //病害
        ecoAxios.get(EcommerceUrl.diseasesUrl).then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    diseasesArray: res.data.data
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    // 获取病虫害的详情
    getPestsAndDiseasesDetail = (e) => {
        console.log(e)
        ecoAxios.get(EcommerceUrl.pestsAndDiseaseDetailUrl + 'id=' + e).then((res,err) => {
            if(res.data.status == 200) {
                console.log(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    // 获取历史数据
    handleChange(value) {
        console.log(`selected ${value}`);
    }


    render() {

        const leftMenu = [
            { 'title': '种植数据', 'content': '', 'key': '0', 'Iconfont': 'iconshangdian1' },
            { 'title': '实时数据', 'content': '', 'key': 'realTime', 'Iconfont': 'iconshangdian' },
            { 'title': '历史数据', 'content': '', 'key': 'history', 'Iconfont': 'iconshangdian' },
            { 'title': '果园图像', 'content': '', 'key': 'garden', 'Iconfont': 'iconshangdian' },
            { 'title': '智慧栽培', 'content': '', 'key': 'wisdom', 'Iconfont': 'iconshangdian' },
            { 'title': '智能识别', 'content': '', 'key': 'intelligence', 'Iconfont': 'iconshangdian' },
            { 'title': '病虫害防治', 'content': '', 'key': 'pestsAndDiseases', 'Iconfont': 'iconshangdian' },
            { 'title': '更多功能', 'content': '', 'key': 'plantMore', 'Iconfont': 'iconshangdian' }

        ]

        return (
            <div className="plantDatas">
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
                        <div className={this.state.show === 'realTime' ? 'paneShow' : 'paneHide'}>
                            <div className="environmental_data" >
                                <div>
                                    <span className="timeData">实时数据</span>
                                </div>
                                <div className="weather_thermometer">
                                    <div className = 'myWeather'>
                                        <Weather></Weather>
                                    </div>
                                    
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
                                        <LineChart chartId="temp" lineChartHeight="400px" chartWidth="350px" chartHeight="400px" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                                    </div>
                                    <div className='humidity'>
                                        <LineChart chartId="_humidity" lineChartHeight="400px" chartWidth="350px" chartHeight="400px" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                                    </div>
                                </div>
                                <div className='three_day_waterAndSun'>
                                    <div className='water'>
                                        <LineChart chartId="water" lineChartHeight="400px" chartWidth="350px" chartHeight="400px" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                                    </div>
                                    <div className='sun'>
                                        <LineChart chartId="sun" lineChartHeight="400px" chartWidth="350px" chartHeight="400px" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={this.state.show === 'history' ? 'paneShow' : 'paneHide'}>
                            <div className='history_data'>
                                <div className='history_choose'>
                                    <div className='point_attribute'>
                                        <div className='point'>
                                            <span>请选择节点： </span>
                                            <span className='history_point'>
                                                <Select defaultValue="point1" style={{ width: 120 }} onChange={this.handleChange}>
                                                    <Option value="point1">节点一</Option>
                                                    <Option value="point2">节点二</Option>
                                                    <Option value="point3">节点三</Option>
                                                </Select>
                                            </span>
                                        </div>
                                        <div className='attribute'>
                                            <span>请选择属性： </span>
                                            <span className='history_attribute'>
                                                <Select defaultValue="attribute1" style={{ width: 120 }} onChange={this.handleChange}>
                                                    <Option value="attribute1">空气温度</Option>
                                                    <Option value="attribute2">空气湿度</Option>
                                                    <Option value="attribute3">土壤水分</Option>
                                                    <Option value="attribute4">日照时长</Option>
                                                    <Option value="attribute5">光照强度</Option>
                                                    <Option value="attribute6">CO2浓度</Option>
                                                    <Option value="attribute7">全部显示 </Option>
                                                </Select>
                                            </span>
                                        </div>
                                    </div>


                                    <div className='year'>
                                        <span>请选择时间段：</span>
                                        <span className='history_year'>
                                            <Select style={{ width: 400 }} onChange={this.handleChange} mode="multiple">
                                                <Option value="2017">2017</Option>
                                                <Option value="2018">2018</Option>
                                                <Option value="2019">2019</Option>
                                            </Select>
                                        </span>
                                    </div>
                                </div>
                                <div className='history_result'>
                                    <LineChart chartId="history" lineChartHeight="400px" chartWidth="60%" chartHeight="400px" iconType="iconqushi" headerTitle="数据变化趋势图"></LineChart>
                                    
                                </div>
                            </div>
                        </div>

                        <div className={this.state.show === 'garden' ? 'paneShow' : 'paneHide'}>
                            <div className='garden_data'>
                                <div className='garden_search'>
                                    <div className='timer'>
                                        <span>时间： </span>
                                        <DatePicker
                                            format="YYYY-MM-DD HH:mm:ss"
                                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                        />
                                    </div>
                                    <Button type="primary">查询</Button>
                                </div>
                                <div className='garden_result'>
                                    <PointBox title="节点1: " imageUrl=""></PointBox>
                                </div>
                            </div>

                        </div>

                        <div className={this.state.show === 'intelligence' ? 'paneShow' : 'paneHide'}>
                            <div className='intelligence_data'>
                                <div className='intelligence_choose'>
                                    <Select defaultValue="point1" style={{ width: 120 }} onChange={this.handleChange}>
                                        <Option value="point1">节点一</Option>
                                        <Option value="point2">节点二</Option>
                                        <Option value="point3">节点三</Option>
                                    </Select>
                                </div>
                                <div className='intelligence_result'>
                                    <div className='plant_image'>
                                        <img src=''></img>
                                    </div>
                                    <div className='intelligence_information'>
                                        <div className='information'>

                                        </div>
                                        <Button type='primary'>查看更多</Button>
                                    </div>
                                </div>
                                <div className='intelligence_chart'>

                                </div>
                            </div>
                        </div>



                        <div className={this.state.show === 'pestsAndDiseases' ? 'paneShow' : 'paneHide'}>
                            <div className='pestsAndDiseases_data'>
                                <div className='pests_data'>
                                    <div className='pests_titie'>
                                        <span><IconFont type='icon03030'></IconFont>常见虫害</span>
                                        <div className='diving_line'></div>
                                    </div>
                                    <div className='pests_content'>
                                        {
                                            this.state.pestsArray.map((pest, index) => {
                                                return (
                                                    <div key={pest.id} className='pestBox' onClick = {this.getPestsAndDiseasesDetail.bind(this, pest.id)}>
                                                        <div className='pestImg'>
                                                            <img src={pest.pic}></img>
                                                        </div>
                                                        <span>{pest.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='diseases_data'>
                                    <div className='diseases_titie'>
                                        <span><IconFont type='iconbinghai'></IconFont>常见病害</span>
                                        <div className='diving_line'></div>
                                    </div>
                                    <div className='diseases_content'>
                                    {
                                            this.state.diseasesArray.map((pest, index) => {
                                                return (
                                                    <div key={pest.id} className='diseaseBox' onClick = {this.getPestsAndDiseasesDetail.bind(this,pest.id)}>
                                                        <div className='diseaseImg'>
                                                            <img src={pest.pic}></img>
                                                        </div>
                                                        <span>{pest.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.show === 'pestsAndDiseases_detail_data' ? 'paneShow' : 'paneHide'}>
                            <div className='pestsAndDiseases_detail'>
                                <div className='title'>
                                    <span><IconFont type='iconbinghai'></IconFont>{}</span>
                                    <div className='diving_line'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

