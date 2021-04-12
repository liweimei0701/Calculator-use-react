import React from 'react'
import './NumberBox.css'
const numbers = [
  {
    id:'clear',
    name:'AC'
  },
  {
    id:'devide',
    name:'/'
  },
  {
    id:'multiply',
    name:'X'
  },
  {
    id:'seven',
    name:'7'
  },
  {
    id:'eight',
    name:'8'
  },
  {
    id:'nine',
    name:'9'
  },
  {
    id:'substract',
    name:'-'
  },
  {
    id:'four',
    name:'4'
  },
  {
    id:'five',
    name:'5'
  },
  {
    id:'six',
    name:'6'
  },
  {
    id:'add',
    name:'+'
  },
  {
    id:'one',
    name:'1'
  },
  {
    id:'two',
    name:'2'
  },
  {
    id:'three',
    name:'3'
  },
  {
    id:'equals',
    name:'='
  },
  {
    id:'zero',
    name:'0'
  },
  {
    id:'dot',
    name:'.'
  }
]

export default class NumberBox extends React.Component {
 handleClick = (id,btnName) =>  {
  //  console.log(id);
  const {justDisplay,clearDisplay,methodDisplay,equalsDisplay} = this.props
   if(id === "clear"){
     clearDisplay()
   }else if (id === 'one'||id === 'two'|| id === 'three'|| id === 'four'|| id === 'five'|| id === 'six'|| id === 'seven'|| id === 'eight'|| id === 'nine' || id === 'dot'){
     justDisplay(btnName)
   }else if(id === 'add'|| id === 'substract' || id === 'multiply' || id === 'devide'){
     methodDisplay(id)
   }else if(id === 'equals'){
     equalsDisplay()
   }
  }
  render(){
    return (
      <div className="buttons">
        {
          numbers.map(item => 
            <button key={item.id} id={item.id} value={item.name}
            onClick={()=>this.handleClick(item.id,item.name)}>{item.name}
            </button>)
        }
      </div>
    )
  }
}