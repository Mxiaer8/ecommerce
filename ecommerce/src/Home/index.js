import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Carousels from '../Component/Carousels'
import Nav from '../Component/Nav'
import FunctionPart from '../Component/FunctionPart'
import TipPart from '../Component/TipPart'
import ProductShow from '../Component/ProductShow'
import Footer from '../Component/Footer'
import LineChart from '../Component/LineChart'
import './index.less'

//首页
class Home extends Component {
    render () {
        const firstIntroduce = "通过布置在果园内的无线传感器采集数据，并传输至云端服务器，构建荔枝生长环境数据库"
        const secIntroduce = "将荔枝果园内的实时环境数据与农艺要求结合，提供科学的荔枝栽培管理方案";
        const thirdIntroduce = "通过计算机视觉技术，检测荔枝花期、成熟度、病虫害等信息";
        const fouthIntroduce = "学习荔枝起源、品种等知识，了解营养价值、经济价值";
        const fifthIntroduce = "提供虚拟漫游体验，模拟真实果园环境，足不出户即可体验荔枝园观光";
        const tipTitle = "当前管理提示";
        const tipImg = require('../static/images/1.JPG');
        const tipImg2 = require('../static/images/carousel_01.jpg')
        const tipMsg = "当前是果实采收期，请分期分批采收；完成果实收货后请注意进行清园工作，包括修剪、防病虫害、全员除草、深耕施肥等工作。"
        const tipMsg2 = "荔枝是起源于我国的世界级名果，其果皮色泽鲜艳美观，肉质细腻多汁，香甜可口，营养丰富，是滋补健体的上等补品。荔枝主要产于我国南方，古时属偏远之地，居于政治文化中心的中原，人们知道荔枝的很少，在唐朝以前，仅限于社会上层极少数人认识荔枝为广大人民所认识的。"
        return(
            <div className = "Home">
                {/* 导航栏 */}
                <Nav></Nav>
                {/* 大轮播图 */}
                <Carousels></Carousels>
                {/* 第一板块：四个功能板块 */}
                <div className="info">
                    <p className="title">荔枝生产物联网平台</p>
                    <p>全方位检测荔枝生长过程，了解荔枝产品、学习荔枝文化</p>
                </div>
                <div className="functionPart">
                    <FunctionPart icontype="iconzidongjiancezhan" title="自动监测" introduce={firstIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconguanguanglvyou" title="虚拟果园" introduce={fifthIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconwuliudanao_o" title="智慧管理" introduce={secIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconicon-test1" title="智能识别" introduce={thirdIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconlizhi" title="荔枝文化" introduce={fouthIntroduce}></FunctionPart>
                </div>
                {/* 第二板块：折线图 + 提示板块 */}
                <div className="environmentData">
                    <div className="envirDataContent">
                        <LineChart chartId="main" chartWidth="60%" chartHeight="" iconType="iconqushi" headerTitle="环境数据变化情况"></LineChart>
                        <TipPart tipIcon="icontishi" tipTitle={tipTitle} tipImg={tipImg} tipMsg={tipMsg}></TipPart>
                    </div>
                </div>
                {/* 第三板块：小轮播图 + 文化板块*/}
                <div className="productMessage">
                    <div className="productMsgContent">
                        <ProductShow></ProductShow>
                        <TipPart tipIcon="iconshu" tipTitle="荔枝文化" tipImg={tipImg2} tipMsg={tipMsg2}></TipPart>
                    </div>
                </div>
                <Footer></Footer>
                
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById("root"));

