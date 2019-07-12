import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from '../Component/Nav'
import IconFont from '../Config/IconFont'
import './index.less'
import BMap from 'BMap'
import Footer from '../Component/Footer'

class About extends Component {
    componentDidMount() {
        this.renderMap();
    }
    //初始化地图的方法
    renderMap = () => {
        var map = new BMap.Map("allmap");
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        var point = new BMap.Point(114.348074,22.93416);
        map.centerAndZoom("惠州市",11);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("惠州市"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        var label = new BMap.Label("惠州市荔景农业科技有限公司",{offset:new BMap.Size(20,-10)});
        marker.setLabel(label);
        label.setStyle({
            fontSize: "16px",
            border: "10",
            height: "100"
        })
    }

    render() {
        return (
            <div className="About">
                <Nav></Nav>
                <div className="aboutMap">
                    <div className="aboutMapHeader">
                        <div className="aboutMapHeaderLeft">
                            <IconFont type="iconlianximaijia" className="aboutMapIcon"></IconFont>
                            <p>联系我们</p>
                        </div>
                        <p className="aboutMapHeaderRight">您的位置: 首页 > 联系我们</p>
                    </div>
                    <div className="aboutMapContent">
                        <div className="aboutMapMessage">
                            <p>单位：惠州市荔景农业科技有限公司</p>
                            <p>联系人：镇隆荔枝哥</p>
                            <p>QQ：1220509302</p>
                            <p>地址：广东省惠州市镇隆山顶村</p>
                        </div>
                        <div className="aboutMapMap">
                            <div
                                id='allmap'
                                style={{
                                    width: '100%',
                                    height: '100vh',
                                }} />
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

ReactDOM.render(<About />, document.getElementById("root"));