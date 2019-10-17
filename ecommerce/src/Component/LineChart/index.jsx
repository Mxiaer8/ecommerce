import React, { Component } from 'react';
import './index.less';
import '../PartHeader'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import PartHeader from '../PartHeader';
import EcommerceUrl from '../../Config/config'
import ecoAxios from '../../Config/ecoAxios';

//首页中折线图
class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartWidth: this.props.chartWidth,
            chartHeight: this.props.chartHeight,
            chartIcon: this.props.iconType,
            headerTitle: this.props.headerTitle,
            chartId: this.props.chartId,
            lineChartHeight: this.props.lineChartHeight,
            chartData: []
        }
    }

    componentDidMount() {  
        var myChart = echarts.init(document.getElementById(this.state.chartId));
        // var data = [["2000-06-05",19],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
        myChart.setOption({
            color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 600
            }],
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: []//dataList
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
                data: [],//valueList
                itemStyle : {  
                    normal : {  
                        color: 'black',
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'green'
                            }, {
                                offset: 1,
                                color: 'red'
                            }]),//线条渐变色
                    }
                }  
                },  
            }]
        });
        ecoAxios.get(EcommerceUrl.linechartUrl).then((res, err) => {
            if (res.status == 200) {
                this.setState({
                    chartData: res.data.data
                })
                var data = this.state.chartData;
                var dateList = data.map(function (item) {
                    return item[0];
                });
                var valueList = data.map(function (item) {
                    return item[1];
                });
                myChart.setOption({
                    xAxis: {
                        data: dateList
                    },
                    series: [{
                        data: valueList
                    }]
                })
                console.log(this.state.chartData);
            }
        }).catch((err) => {
            console.log(err)
        })
}

render() {
    return (
        <div className="LineChart" style={{ width: this.state.chartWidth, height: this.state.chartHeight }}>
            <PartHeader headerIconType={this.state.chartIcon} headerTitle={this.state.headerTitle} params="PlantDatas?realTime"></PartHeader>
            <div id={this.state.chartId} style={{ width: "100%", height: this.state.lineChartHeight }}></div>
        </div>
    )
}
}

export default LineChart