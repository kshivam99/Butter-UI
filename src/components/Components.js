import React from "react";
import Sidebar from "./Sidebar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Import from "./Import";
import Avatar from "./Elements/Avatar";
import Alert from "./Elements/Alert";
import Input from "./Elements/Input";
import Card from "./Elements/Card";
import Button from "./Elements/Button";

function Components() {
  let { path } = useRouteMatch();
  return (
    <div className="component--body">
      <Sidebar />
      <div className="extradiv"></div>
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
        <Route path={`${path}/input`}>
          <Input />
        </Route>
        <Route path={`${path}/card`}>
          <Card />
        </Route>
        <Route path={`${path}/button`}>
          <Button />
        </Route>
        <Route path="/*">
          <h1>element not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Components;
