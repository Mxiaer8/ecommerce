import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Carousels from '../Component/Carousels'
import Nav from '../Component/Nav'
import FunctionPart from '../Component/FunctionPart'
import './index.less'

class Home extends Component {
    render () {
        const firstIntroduce = "通过布置在果园内的无线传感器采集数据，并传输至云端服务器，构建荔枝生长环境数据库"
        const secIntroduce = "将荔枝果园内的实时环境数据与农艺要求结合，提供科学的荔枝栽培管理方案";
        const thirdIntroduce = "通过计算机视觉技术，检测荔枝花期、成熟度、病虫害等信息";
        const fouthIntroduce = "学习荔枝起源、品种等知识，了解营养价值、经济价值";
        return(
            <div className = "Home">
                <Nav></Nav>
                <Carousels></Carousels>
                <div className="info">
                    <p className="title">荔枝生产物联网平台</p>
                    <p>全方位检测荔枝生长过程，了解荔枝产品、学习荔枝文化</p>
                </div>
                <div className="functionPart">
                    <FunctionPart icontype="iconzidongjiancezhan" title="自动监测" introduce={firstIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconwuliudanao_o" title="智慧管理" introduce={secIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconicon-test1" title="智能识别" introduce={thirdIntroduce}></FunctionPart>
                    <FunctionPart icontype="iconlizhi" title="荔枝文化" introduce={fouthIntroduce}></FunctionPart>
                </div>
                <div></div>
                
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById("root"));

