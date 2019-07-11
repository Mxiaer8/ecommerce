import React, { Component } from 'react';
import IconFont from '../../Config/IconFont';
import './index.less';

//首页中多个板块的头部
class PartHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIconType: this.props.headerIconType,
            headerTitle: this.props.headerTitle
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="PartHeader">
                <div className="PartHeaderLeft">
                    <IconFont className="PartHeaderIcon" type={this.state.headerIconType}></IconFont>
                    <p>{this.state.headerTitle}</p>
                </div>
                <p className="PartHeaderMore">查看更多>></p>
            </div>
        )
    }
}

export default PartHeader