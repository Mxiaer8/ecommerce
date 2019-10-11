import React, { Component } from 'react'
import './index.less'

class SmallNav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav">
                <span className="title">{this.props.current_position}</span>
                <div className="position">
                    <span>您的位置: 首页>种植数据>{this.props.current_position}</span>
                </div>
            </div>
        )
    }
}

export default SmallNav