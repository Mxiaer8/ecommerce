import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from '../Component/Nav' 
import LeftNavPane from '../Component/LeftNavPane'
import './index.less'
class PlantDatas extends Component {
    render () {
        return(
            <div className = "">
                <Nav></Nav>
                <LeftNavPane></LeftNavPane>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

