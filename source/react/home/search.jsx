import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Icon from 'material-ui/Icon';

import { observer } from 'mobx-react';

@observer
class Search extends Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    search(e){
        this.props.store.search = e.target.value;
    }
    render(){
        return(
            <div className="searchBar">
                <Icon>search</Icon>
                <Input
                    id="placeholder"
                    placeholder= "Search for an item or product"
                    fullWidth
                    disableUnderline={true}
                    value={this.props.store.search}
                    onChange={this.search}
                />
            </div>
        )
    }
}

export default Search;