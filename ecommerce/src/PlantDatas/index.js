import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nav from '../Component/Nav' 
class PlantDatas extends Component {
    render () {
        return(
            <div className = "">
                <Nav></Nav>
            </div>
        )
    }
}



ReactDOM.render(<PlantDatas />, document.getElementById("root"));

