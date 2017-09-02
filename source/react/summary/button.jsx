import React, { Component } from 'react';

import Button from 'material-ui/Button';

import { observer } from 'mobx-react';

@observer
class SummaryButton extends Component{
    constructor(props){
        super(props);
    }
    calculate(){
        window.location.href = "#/calculate";
    }
    render(){
        return(
            <div>
                <Button raised className="gstCalculate" onClick={this.calculate}>
                    See how GST Affects your Budget
                </Button>
            </div>
        )
    }
}
export default SummaryButton;