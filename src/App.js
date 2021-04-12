import React from 'react'
import Display from './components/Display'
import NumberBox from './components/NumberBox'
import './App.css'
import { create, all } from 'mathjs'
const mathjs = create(all)
export default class App extends React.Component {
  state = {
    preResult:'',
    Result:0
  }
  justDisplay = (btnName) =>{
    const {preResult,Result} = this.state
    this.setState({
      preResult: preResult + btnName,
      Result: Result === 0 || Result === '+' || Result === '-' || Result === '*' || Result === '/'?btnName:Result + btnName
    })
  }
  clearDisplay = () =>{
    this.setState({
      preResult:'',
      Result:0
    })
  }
  methodDisplay = (id) => {
    let {preResult,Result} = this.state
    let result = Result
    switch(id){
      case 'add':
        result = '+'
        break;
      case 'substract':
        result = '-'
        break;
      case 'devide':
        result = '/'
        break;
      case 'multiply':
        result = '*'
        break;
        default: 
        result = ''
    }
    let char = preResult.charAt(preResult.length-1)
    if(char === '+' || char === '-' || char === '*' || char === '/') {
      preResult = preResult.substr(0,preResult.length-1)
    }
    this.setState({
      preResult:preResult + result,
      Result:result
    })
  }
  equalsDisplay = () => {
    let preResult = this.state.preResult
    let char = preResult.charAt(preResult.length-1)
    if(char === '+' || char === '-' || char === '*' || char === '/') {
      preResult = preResult.substr(0,preResult.length-1)
    }
    const result = mathjs.evaluate(preResult)
    this.setState({
      preResult: preResult + '=' + result,
      Result:result
    })
  }
  render(){
    return (
      <div className="calculator">
        <Display
        preResult={this.state.preResult}
        Result={this.state.Result}/>
        <NumberBox
        justDisplay={this.justDisplay}
        clearDisplay={this.clearDisplay}
        methodDisplay={this.methodDisplay}
        equalsDisplay={this.equalsDisplay}
        />
      </div>
    )
  }
}
