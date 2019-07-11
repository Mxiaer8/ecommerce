import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from '../Component/Nav'
import Carousel from '../Component/Carousels'
import LineChart from '../Component/LineChart'
import './index.less'

class About extends Component {

    render() {
        return (
            <div className="About">
                <Nav></Nav>
                <Carousel></Carousel>
                <LineChart chartId="main" chartWidth="60%" chartHeight="" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                <LineChart chartId="sec" chartWidth="60%" chartHeight="" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                i am a about;why not?
            </div>
        )
    }
}

ReactDOM.render(<About />, document.getElementById("root"));