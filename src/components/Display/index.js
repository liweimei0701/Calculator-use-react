import React from 'react'
import './Display.css'
export default class Display extends React.Component {
  render (){
    const {preResult,Result} = this.props
    return(
      <div id="display">
        <div className="preResult">{preResult}</div>
        <div className="result">{Result}</div>
      </div>
    )
  }
}