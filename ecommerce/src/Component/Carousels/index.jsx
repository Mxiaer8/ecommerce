import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.less';

//首页中大轮播图
class Carousels extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    //点击右箭头轮播到下一张图片
    next() {
        this.slider.slick.slickNext();
    }
    //点击左箭头轮播到上一张图片
    prev() {
        this.slider.slick.slickPrev();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Carousels">
                {/* 轮播内容，共3轮 */}
                <Carousel autoplay ref={el => (this.slider = el)} speed="500">
                    <div key={1}>
                        <img className="carousel-img" src={require('../../static/images/carousel_02.jpg')}></img>
                    </div>
                    <div key={2}>
                        <img className="carousel-img" src={require('../../static/images/one.jpg')}></img>
                    </div>
                    <div key={3}>
                        <img className="carousel-img" src={require('../../static/images/carousel_02.jpg')}></img>
                    </div>
                </Carousel>
                {/* 左、右箭头 */}
                <div className="leftArrow" onClick={this.prev}>
                    <div className="b"><b></b></div>
                </div>
                <div className="rightArrow" onClick={this.next}>
                    <div className="b"><b></b></div>
                </div>
            </div>
        )
    }
}

export default Carousels
