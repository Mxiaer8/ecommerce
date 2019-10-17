import React, { Component } from 'react';
import IconFont from '../../Config/IconFont';
import './index.less'

//首页中“自动监测”、“智慧管理”等板块
class FunctionPart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    handleClick(params, e){
        window.location.href = '/' + params;
    }

    render() {
        const {icontype,title,introduce,params} = this.props;
        return (
            <div className="FunctionPart">
                <IconFont type={icontype} className="icon-font"></IconFont>
                <div className="function-Icon-content">
                    <p className="function-icon-title">{title}</p>
                    <p className="function-icon-introduce">{introduce}</p>
                </div>
                <div className="overlay" onClick={this.handleClick.bind(this,params)}></div>
            </div>
        )
    }
}

export default FunctionPart