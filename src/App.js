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
    // 这里我加了另外一个id进行判断,当有结果的时候让id='e',在clearDisplay函数里来进行判断,
    // 如果是'clear',那就setState让其为初始值,
    // 如果id='e', 那就手动preResult='', Result = 0,然后再来执行setState让其显示对应的btnName.(因为不能同时执行两个setState, 原因以后再研究)
    // 并且在id= 'e'的情况里还要排除四种运算符的情况,如果是运算符,先将结果Result存在preResult中,再来更新btnName.
    let {preResult,Result} = this.state
    if(id === 'clear'){
      this.setState({
        preResult:'',
        Result:0
    })
    }else if (id === 'e') {
      if(btnName === '+' || btnName === '-' || btnName === '*' || btnName === '/') {
        preResult = Result
      }else {
        preResult = ''
      }
      // preResult = ''
      // Result = 0
      this.setState({
        preResult:preResult + btnName,
        Result: btnName
      })
    }
   
  }
  methodDisplay = (btnName) => {
    let {preResult} = this.state
    let char = preResult.charAt(preResult.length-1)
    if(char === '+' || char === '-' || char === '*' || char === '/') {
      preResult = preResult.substr(0,preResult.length-1)
    }
    this.setState({
      preResult:preResult + btnName,
      Result:btnName
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
      return result = 'NaN'
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
