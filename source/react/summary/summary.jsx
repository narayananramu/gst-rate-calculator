import React, {Component} from 'react';
import SummaryButton from './button';
import SummaryList from './list';

import { observer } from 'mobx-react';

@observer
class Summary extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.store.selectedItems.length > 0){
            return(
                <div>
                    <SummaryButton store={this.props.store} />
                    <SummaryList store={this.props.store} />
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default Summary;