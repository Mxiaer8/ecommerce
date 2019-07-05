import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from '../Component/Nav'
import LeftNavPane from '../Component/LeftNavPane'
import Weather from '../Component/Weather'

import './index.less'
class PlantDatas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav_title: '种植数据'
        }
    }



    render() {
        return (
            <div className="plantDatas">
                <Nav></Nav>
                <div className="content">
                    <LeftNavPane></LeftNavPane>
                    <div className = "main_content">
                        <div className = "nav">
                            <span className = "title">数据分析</span>
                            <div className = "position">
                                <span>您的位置:</span>
                            </div>
                        </div>
                        <div>
                            <Weather></Weather>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

