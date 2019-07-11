import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from '../Component/Nav'
import LineChart from '../Component/LineChart'
import './index.less'

class About extends Component {

    render() {
        return (
            <div className="About">
                <Nav></Nav>
                <LineChart lineChartHeight="200px" chartId="main" chartWidth="60%" chartHeight="" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                <div className="aboutMap">
                    <div className="aboutMapHeader">

                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<About />, document.getElementById("root"));