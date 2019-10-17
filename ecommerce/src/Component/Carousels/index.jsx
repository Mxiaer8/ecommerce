import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.less';
import EcommerceUrl from '../../Config/config'
import ecoAxios from '../../Config/ecoAxios';

//首页中大轮播图
class Carousels extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            pictures: [],
            p1: ''
        }
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
        this.getCarouselsPictures();
    }

    getCarouselsPictures() {
        ecoAxios.get(EcommerceUrl.carouselsUrl).then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    pictures: res.data.data,
                    p1: res.data.data[0].pic
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        this.getCarouselsPictures();
        const url = this.state.p1;
        return (
            <div className="Carousels">
                {/* 轮播内容，共3轮 */}
                <Carousel autoplay ref={el => (this.slider = el)} speed="500">
                    <div key={1}>
                        <img className="carousel-img" src={this.state.p1}></img>
                    </div>
                    {/* <div key={2}>
                        <img className="carousel-img" src={require('../../static/images/one.jpg')}></img>
                    </div> */}
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
