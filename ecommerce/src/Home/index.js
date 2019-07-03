import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Carousels from '../Component/Carousels'
class Home extends Component {
    render () {
        return(
            <div className = "Home">
                <Carousels></Carousels>
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById("root"));

