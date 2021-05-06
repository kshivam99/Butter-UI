import React, { useState } from "react";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouteMatch, Link } from "react-router-dom";

function StackList({ name }) {
  let { url } = useRouteMatch();

  return (
    <Link className="link stacklist" to={`${url}/${name}`}>
      <h1>{name}</h1>
    </Link>
  );
}

function Sidebar({ showList, setShowList }) {
  return (
    <div className={true ? "sidelist" : "sidelist--show"}>
      <div className="sidelist--header">
        <h4>Components</h4>
        <AiFillCloseCircle className="sidelist--close" />
      </div>
      <div className="stacklist--container">
        <StackList name={"Avatar"} />
        <StackList name={"Alert"} />
        <StackList name={"Badge"} />
        <StackList name={"Button"} />
        <StackList name={"Card"} />
        <StackList name={"Input"} />
        <StackList name={"Lists"} />
        <StackList name={"Navigation"} />
        <StackList name={"Modal"} />
        <StackList name={"Toast"} />
      </div>
    </div>
  );
}

export default Sidebar;
