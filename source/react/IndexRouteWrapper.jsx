import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import HomeList from './home/list';
import Search from './home/search';
import Summary from './summary/summary';


export default class IndexRouteWrapper extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrapper">
                <div className="col">
                    <h1 className="title">GST Rate Comparsion</h1>
                    <div className="content">
                        <div id="search">
                            <Search store={this.props.store} />
                        </div>
                        <div id="list">
                            <HomeList store={this.props.store} />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="summary">
                        <Summary store={this.props.store} />
                    </div>
                </div>
            </div>
        )
    }
}