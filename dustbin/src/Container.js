import React, { Component } from "react";
import Box from "./Box";
import Dustbin from "./Dustbin";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

class Container extends Component {
  render() {
    return (
      <div style={{position:'absolute',margin:'auto'}}>
        <div style={{ overflow: "hidden", clear: "both"}}>
          <Dustbin />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Box id="1" name="Glass" />
          <Box id="2" name="banana" />
          <Box od="3" name="paper" />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
