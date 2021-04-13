import React from 'react'
import './Display.css'
export default class Display extends React.Component {
  render (){
    const {preResult,Result} = this.props
    // console.log(preResult,Result);
    return(
      <div id="display">
        <div className="preResult">{preResult}</div>
        <div className="result">{Result}</div>
      </div>
    )
  }
}