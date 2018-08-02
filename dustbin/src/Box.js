import React, { Component } from "react";
import { DragSource } from "react-dnd";
import ItemTypes from "./ItemTypes";
import {message} from 'antd';
import 'antd/dist/antd.css';

const type = ItemTypes.Box;
const boxSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.id,
      name: props.name
    };
  },
  canDrag(props) {
    let active=props.id % 2 === 0 ? props.isReady : !props.isReady;     
    if(active!==true){
        console.log('cannot be dragged')
        message.warn('cannot be dragged');
    } 
    return active;
  },
  endDrag(props, monitor, component) {
    let dropresult;
    if ((dropresult = monitor.getDropResult())) {
      alert(
        `you successfully drop ${monitor.getItem().name} into ${
          dropresult.name
        }`
      );
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const style = {
  border: "1px solid gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};
class Box extends Component {
  render() {
    const { id, name } = this.props;
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(<div style={{ ...style, opacity }}>{name}</div>);
  }
}

export default DragSource(type, boxSource, collect)(Box);
