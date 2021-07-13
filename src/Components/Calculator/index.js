// @flow

import * as React from 'react';


const Calculator = (): React.Node => {
const [value1, setValue1] = React.useState('');
const [value2, setValue2] = React.useState('');
const [modifier, setModifier] = React.useState('');
const [switchVal, setSwitchVal] = React.useState(false);
const [result, setResult] =React.useState('');

React.useEffect(()=>{

},[value1,value2,modifier,result]);


const valueString = (operand, value)=>{
    if (operand === false){
    let val = value1 + value;
    console.log(val);
    setValue1(val);
    console.log(value1);
  } else {
    let val = value2 + value;
    console.log(val);
    setValue2(val);
    console.log(value2);
  }
};

const switchOperands = ()=> {
  if (switchVal === false){
    setSwitchVal(true)
    console.log('operand 2')
  }
};

const chooseModifier  = (value)=>{
  setModifier(value);
  switchOperands();
  console.log(value);
};

const calcTotal = (value1, value2, modifier)=>{
  const val1 = parseInt(value1);
  const val2 = parseInt(value2);

  let result = 0;

 if (modifier === '+'){
   result = val1 + val2;
 } else if (modifier === '-'){
   result = val1 - val2;
 } else if(modifier === 'x'){
   result = val1 * val2;
 } else if (modifier === '/'){
   result = val1/val2;
 }

 setResult(result.toString());
};

const clearCalc = () =>{
  setValue1('');
  setValue2('');
  setModifier('');
  setSwitchVal(false);
  setResult('')
};


const Styles = {
  container:{
    border: 'solid',
    backgroundColor: 'red',
    width: '300px',
    height: '500px',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  grid:{
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridTemplateRows: 'auto auto auto auto',
    gap: '10px',
    justifyContent: 'center'        
  },

  resultBox:{ 
    border: 'solid',
    height: '15%',
    width: '90%',
    backgroundColor: 'White',
    justifyContent: 'center',
    margin: '10px'
  }
}
return (
  <div style={Styles.container}> 
    Calculator
    <div style={Styles.resultBox}>
        {value1}
        <div>
          {modifier}
        </div>
        {value2}
        <div>
        {result}
        </div>
    </div>


   <div style={Styles.grid}>
    <button onClick={()=>valueString(switchVal,1)}>1</button>
    <button onClick={()=>valueString(switchVal,2)}>2</button>
    <button onClick={()=>valueString(switchVal,3)}>3</button>
    <button onClick={()=>chooseModifier('+')}>+</button>
    <button onClick={()=>valueString(switchVal,4)}>4</button>
    <button onClick={()=>valueString(switchVal,5)}>5</button>
    <button onClick={()=>valueString(switchVal,6)}>6</button>
    <button onClick={()=>chooseModifier('-')}>-</button>
    <button onClick={()=>valueString(switchVal,7)}>7</button>
    <button onClick={()=>valueString(switchVal,8)}>8</button>
    <button onClick={()=>valueString(switchVal,9)}>9</button>
    <button onClick={()=>chooseModifier('x')}>X</button>
    <button onClick={()=>valueString(switchVal,0)}>0</button>
    <button onClick={()=>clearCalc()}>Clear</button>
    <button onClick={()=>calcTotal(value1,value2,modifier)}>Total</button>
     <button onClick={()=>chooseModifier('/')}>/</button>
    </div>
  </div>
)};

export default Calculator;