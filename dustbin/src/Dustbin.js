import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";

const type = ItemTypes.Box;

const DustbinTarget = {
  drop(props,monitor,component) {
    return {
      name: "Dustbin"
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const style = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};
class Dustbin extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = "#222";
    if (isActive) {
      backgroundColor = "darkgreen";
    } else if (canDrop) {
      backgroundColor = "darkkhaki";
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {" "}
        {isActive ? "Release to drop" : "Drag a box here"}
      </div>
    );
  }
}

export default DropTarget(type, DustbinTarget, collect)(Dustbin);
