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
    let {preResult,Result} = this.state
    let char = preResult.charAt(0)
    this.setState(() => {
      return {
        preResult: char === '+' || char === '-' || char === '*' || char === '/' || char === '='?
        preResult.substr(1) + btnName 
        : preResult + btnName,
        Result: Result === 0 || Result === '+' || Result === '-' || Result === '*' || Result === '/' || Result === '='?
        btnName :
        Result + btnName
      }
    })
  }
  clearDisplay = (id,btnName) =>{
    // console.log('执行了');
    let {preResult} = this.state
    if(id === 'clear'){
      this.setState({
        preResult:'',
        Result:0
    })
    }else if (id === 'e') {
      preResult = ''
      // Result = 0
      this.setState({
        preResult:preResult + btnName,
        Result: btnName
      })
    }
   
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
    let result = ''
    let preResult = this.state.preResult
    let firstChar = preResult.charAt(0)
    if(firstChar === '=' || firstChar === '+' || firstChar === '-' || firstChar === '*' || firstChar === '/'  ){
      preResult = ''
    }
    if(preResult === ''){
      return result = "NaN"
    }
    let char = preResult.charAt(preResult.length-1)
    if(char === '+' || char === '-' || char === '*' || char === '/') {
      preResult = preResult.substr(0,preResult.length-1)
    }
   
   
      result = mathjs.evaluate(preResult)
    // const result = mathjs.evaluate(preResult)
    this.setState(() => {
      return {
        preResult: preResult + '=' + result,
        Result:result
      }
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
