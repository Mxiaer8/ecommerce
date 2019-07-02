import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.less';

class Carousels extends Component {
    constructor() {
        super()
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Carousels">
                <Carousel autoplay>
                    <div>
                        <img class="carousel-img" src={require('../../static/images/carousel_01.jpg')}></img>
                        <h3>1登录注册</h3>   
                    </div>
                    <div>
                        <img class="carousel-img" src={require('../../static/images/carousel_01.jpg')}></img>
                        <h3>2登录注册</h3>
                    </div>
                    <div>
                        <img class="carousel-img" src={require('../../static/images/carousel_01.jpg')}></img>
                        <h3>3</h3>
                    </div>
                    <div>
                        <img class="carousel-img" src={require('../../static/images/carousel_01.jpg')}></img>
                        <h3>4</h3>
                    </div>
                </Carousel>,
                mountNode,
            </div>
        )
    }
}

export default Carousels
