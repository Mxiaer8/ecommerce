import React, { Component } from 'react';
import './index.less';
import '../PartHeader';
import PartHeader from '../PartHeader';

//首页中“荔枝文化”及“提示”等板块
class TipPart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { tipIcon, tipTitle, tipImg, tipMsg, params } = this.props;
        return (
            <div className="TipPart">
                <PartHeader headerIconType={tipIcon} headerTitle={tipTitle} params={params}></PartHeader>
                <div className="tipContent">
                    <img className="tipImg" src={tipImg}></img>
                    <p className="tipMsg">{tipMsg}</p>
                </div>
            </div>
        )
    }
}

export default TipPart