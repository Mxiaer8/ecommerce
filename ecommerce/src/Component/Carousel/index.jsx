import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css';
class Carousel extends Component {
    constructor() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Carousel">
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>,
                mountNode,
            </div>
        )
    }
}

export default Carousel
