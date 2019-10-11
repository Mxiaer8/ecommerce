/**
 * 此组件代码需重新整理
 */


import React, { Component } from 'react'
import './index.less'

window.getCity = function () {
    function city() {
        //去掉城市名后的"市"
        var city = '惠阳';
        //请求当前城市的天气数据
        console.log(city)
        jsonp(createUrl(city)[0]);
        jsonp(createUrl(city)[1]);
    }
    city()
}

// 数据请求函数
function jsonp(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.insertBefore(script, document.body.firstChild);
    document.body.removeChild(script);
}

//数据请求成功回调函数，用于将获取到的数据放入页面相应位置
window.getWeather = function (response) {
    var data = response.result;
    if (data) {
        var oDiv = document.getElementsByClassName('box');
        for (var i = 0; i < oDiv.length; i++) {
            var oSpan = oDiv[i].getElementsByClassName('info');
            oSpan[1].innerHTML = data[i].week;
            oSpan[2].innerHTML = data[i].weather;
            oSpan[3].innerHTML = data[i].temperature;
        }
        var aDiv = document.getElementsByClassName('future_box');
        for (var i = 0; i < aDiv.length; i++) {
            var aSpan = aDiv[i].getElementsByClassName('future_info');
            aSpan[0].innerHTML = data[i + 3].days;
            aSpan[1].innerHTML = data[i + 3].weather;
            aSpan[2].innerHTML = data[i + 3].temperature;
        }
    }


    //根据返回数据，替换不同天气图片
    changeImg(response);
}

//根据获取到的数据更改页面中相应的图片
function changeImg(data) {
    if (data && data.result) {
        var aImg = document.getElementById('future_container').getElementsByClassName('weather_img');
        for (var j = 0; j < aImg.length; j++) {
            var weatherId = data.result[j].weatid;
            chooseImg(weatherId, aImg[j]);
        }
    }

}

//选择图片
function chooseImg(id, index) {
    switch (id) {
        case '1':
            index.src = require('../../static/images/weather_icon/1.png');
            break;
        case '2':
            index.src = require('../../static/images/weather_icon/2.png');
            break;
        case '3':
            index.src = require('../../static/images/weather_icon/3.png');
            break;
        case '4':
        case '5':
        case '6':
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '20':
        case '22':
        case '23':
        case '24':
        case '25':
        case '26':
            index.src = require('../../static/images/weather_icon/4.png');
            break;
        case '7':
            index.src = require('../../static/images/weather_icon/6.png');
            break;
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '27':
        case '28':
        case '29':
            index.src = require('../../static/images/weather_icon/5.png');
            break;
        case '19':
        case '21':
        case '30':
        case '31':
        case '32':
        case '33':
            index.src = require('../../static/images/weather_icon/7.png');
            break;
        default:
            index.src = require('../../static/images/weather_icon/8.png');
    }
}

//根据城市名创建请求数据及url
function createUrl() {
    var cityName = '';
    if (arguments.length == 0) {
        cityName = document.getElementById('text').value;
    } else {
        cityName = arguments[0];
    }
    var urls = [];
    urls[0] = 'http://api.k780.com/?app=weather.future&weaid=1&&appkey=43682&sign=c6b2e40531337bcbaa719bbfa412ad0c&format=json&jsoncallback=getWeather&weaid=' + encodeURI(cityName);
    return urls;
}


class Weather extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //调用jsonp函数请求当前所在城市
        jsonp('https://api.map.baidu.com/api?v=2.0&ak=Dv1NMU23dh1sGS9n2tUouDEYY96Dfzh3&s=1&callback=getCity');
    }



    render() {
        return (
            <div>
                <section>
                    <div id="future_container">
                        <div className="city_weather">
                            <p>惠东</p>
                            <p>天气</p>
                        </div>
                        <div className="box">
                            <span>
                                <p className="info">今天</p>
                                <p className="info">星期X</p>
                            </span>
                            <img className="weather_img" alt="天气" />
                            <span className="info">--</span>
                            <span className="info">12-16℃</span>
                        </div>
                        <div className="box">
                            <span>
                                <p className="info">明天</p>
                                <p className="info">星期X</p>
                            </span>
                            <img className="weather_img" alt="天气" />
                            <span className="info">--</span>
                            <span className="info">12-16℃</span>
                        </div>
                        <div className="box">
                            <span>
                                <p className="info">后天</p>
                                <p className="info">星期X</p>
                            </span>
                            <img className="weather_img" alt="天气" />
                            <span className="info">--</span>
                            <span className="info">12-16℃</span>
                        </div>
                        <div className="future_box">
                            <span className="future_info">201X-XX-XX</span>
                            <img className="weather_img" alt="天气" />
                            <span className="future_info">--</span>
                            <span className="future_info">12-16℃</span>
                        </div>
                        <div className="future_box">
                            <span className="future_info">201X-XX-XX</span>
                            <img className="weather_img" alt="天气" />
                            <span className="future_info">--</span>
                            <span className="future_info">12-16℃</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Weather