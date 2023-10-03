import React from "react";
import '../stylesheets/clear-button.css'

const ClearButton = (props) => (
  <div 
  className='clear-button'
  onClick={props.clearHandle}
  >
    {props.children}
  </div>
);

export default ClearButton;