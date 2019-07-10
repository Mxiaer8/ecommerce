import React, { Component } from 'react';
import './index.less';
import '../PartHeader'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import PartHeader from '../PartHeader';

//首页中折线图
class LineChart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var data = [["2000-06-05",19],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
        // 绘制图表
        var dateList = data.map(function (item) {
            return item[0];
        });
        var valueList = data.map(function (item) {
            return item[1];
        });
        myChart.setOption({
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 600
            }],
            title: {
                text: '环境数据变化情况',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: dateList
            },
            yAxis: {
                splitLine: {show: false}
            },
            dataZoom: [{
                startValue: '2000-07-15',
                type: 'slider',
                show: 'true',
                xAxisIndex: [0],
            }, {
                type: 'inside'
            }],
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            grid: [{
                bottom: '20%'
            }],
            series: [{
                type: 'line',
                showSymbol: false,
                data: valueList
            }]
        });
}

render() {
    return (
        <div className="LineChart">
            <PartHeader headerIconType="iconqushi" headerTitle="环境数据变化情况"></PartHeader>
            <div id="main" style={{ width: 720, height: 400 }}></div>
        </div>
    )
}
}

export default LineChart