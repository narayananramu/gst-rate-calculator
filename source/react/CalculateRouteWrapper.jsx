import React, { Component } from 'react';

import HomeList from './sideSearch/list';
import Search from './sideSearch/search';
import Detailed from './detailed/list';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

export default class CalculateRouteWrapper extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        window.location.href = "#/";
        this.props.store.empty();
    }
    render(){
        return(
            <div className="wrapper">
                <div className="col" id="sidebar">
                    <div id="search">
                        <Search store={this.props.store} />
                    </div>
                    <div id="list">
                        <HomeList store={this.props.store} />
                    </div>  
                </div>
                <div className="col">
                    <h1 className="title">GST Rate Comparsion</h1>
                    <IconButton className="close-button" aria-label="Close" onClick={this.goBack}>
                        <Icon>clear</Icon>
                    </IconButton>
                    <div id="detailed">
                        <Detailed store={this.props.store} />
                    </div>
                </div>
            </div>
        )
    }
}