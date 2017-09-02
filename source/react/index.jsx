import React from 'react';
import ReactDOM from 'react-dom';
import IndexRouteWrapper from './IndexRouteWrapper';
import CalculateRouteWrapper from './CalculateRouteWrapper';
import Store from './home/store.js';

import { HashRouter, Switch, Route } from 'react-router-dom';
Store.fetchCategory();
Store.fetchItems();
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route 
                exact path="/"
                render={(props)=> {
                    return (<IndexRouteWrapper {...props} store={Store} />)
            }} />
            <Route 
                exact path="/calculate"
                render={(props)=> {
                    return (<CalculateRouteWrapper {...props} store={Store} />)
            }} />
        </Switch>
    </HashRouter>, document.getElementById("container")
);