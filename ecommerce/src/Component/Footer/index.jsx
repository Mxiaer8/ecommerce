import React, { Component } from 'react';
import './index.less';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Footer">
                <p>负责单位：华南农业大学虚拟现实研究所  地址：广东省广州市天河区五山路</p>
            </div>
        )
    }
}

export default Footer