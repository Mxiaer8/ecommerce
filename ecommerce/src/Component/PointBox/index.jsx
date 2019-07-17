import React, {Component} from 'react'

class PointBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            imageUrl : this.props.imageUrl
        }
    }

    render() {
        return(
            <div className = 'point'>
                <span className = 'title'>{this.state.title}</span>
                <img src = {this.state.imageUrl}></img>
            </div>
        )
    }
}

export default PointBox