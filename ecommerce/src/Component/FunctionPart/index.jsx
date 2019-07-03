import React, { Component } from 'react';
import IconFont from '../../Config/IconFont';
import './index.less'

class FunctionPart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        const {icontype,title,introduce} = this.props;
        console.log(title);
        return (
            <div className="FunctionPart">
                <IconFont type={icontype} className="icon-font"></IconFont>
                <div className="function-Icon-content">
                    <p className="function-icon-title">{title}</p>
                    <p className="function-icon-introduce">{introduce}</p>
                </div>
            </div>
        )
    }
}

// functionIcon.prototypes = {
//     iconType
// }

export default FunctionPart