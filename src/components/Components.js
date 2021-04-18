import React from 'react';
import Sidebar from "./Sidebar";
import {Route, Switch, useRouteMatch } from "react-router-dom";
import Import from "./Import";
import Avatar from "./Elements/Avatar";
import Alert from "./Elements/Alert";


function Components() {
    let { path } = useRouteMatch();
    return (
        <div className="component--body">
            <Sidebar />
            <Switch>
            <Route exact path={path}>
                <Import />
            </Route>
            <Route path={`${path}/avatar`}>
                <Avatar />
            </Route>
            <Route path={`${path}/alert`}>
                <Alert />
            </Route>
            <Route path ="/*">
                <h1>page not found</h1>
            </Route>
            </Switch>
        </div>
    )
}

export default Components
