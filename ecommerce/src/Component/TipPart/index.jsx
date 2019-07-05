import React, { Component } from 'react';
import './index.less';
import IconFont from '../../Config/IconFont';

class TipPart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { tipIcon, tipTitle, tipImg, tipMsg } = this.props;
        return (
            <div className="TipPart">
                <div className="tipHeader">
                    <div className="tipHeaderLeft">
                        <IconFont type={tipIcon} className="tipIcon"></IconFont>
                        <p>{tipTitle}</p>
                    </div>
                    <p className="tipMore">查看更多>></p>
                </div>
                <div className="tipContent">
                    <img className="tipImg" src={tipImg}></img>
                    <p className="tipMsg">{tipMsg}</p>
                </div>
            </div>
        )
    }
}

export default TipPart