import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from '../Component/Nav'
import LeftNavPane from '../Component/LeftNavPane'
import './index.less'
class PlantDatas extends Component {
    render() {
        return (
            <div className="plantDatas">
                <Nav></Nav>
                <div className="content">
                    <LeftNavPane></LeftNavPane>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

