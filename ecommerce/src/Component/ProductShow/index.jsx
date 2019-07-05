import React, { Component } from 'react';
import { Carousel } from 'antd';
import IconFont from '../../Config/IconFont'
import './index.less';

class ProductShow extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next() {
        this.slider.slick.slickNext();
    }
    prev() {
        this.slider.slick.slickPrev();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ProductShow">
                <div className="productHeader">
                    <div className="productHeaderLeft">
                        <IconFont className="productIcon" type="iconliebiao"></IconFont>
                        <p>荔枝产品</p>
                    </div>
                    <p className="productMore">查看更多>></p>
                </div>
                
                <Carousel autoplay ref={el => (this.slider = el)} speed="500" className="productCarousel">
                    <div key={1}>
                        <div className="productItem">
                            <div className="product">
                                <img className="productImg" src={require('../../static/images/1.JPG')}></img>
                                <p>最新上市！！高品质糯米糍荔</p>
                            </div>
                            <div className="product">
                                <img className="productImg" src={require('../../static/images/carousel_01.jpg')}></img>
                                <p>最新上市！！高品质糯米糍荔枝</p>
                            </div>
                        </div>
                    </div>
                    <div key={2}>
                        <div className="productItem">
                            <div className="product">
                                <img className="productImg" src={require('../../static/images/carousel_02.jpg')}></img>
                                <p>最新上市！！高品质糯米糍荔枝</p>
                            </div>
                            <div className="product">
                                <img className="productImg" src={require('../../static/images/two.png')}></img>
                                <p>最新上市！！高品质糯米糍荔枝</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
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

export default ProductShow