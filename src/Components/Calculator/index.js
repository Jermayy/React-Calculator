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
  if (switchVal === false && value1 !== ''){
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

  if (value1 && !value2){
    result = value1
  } 

  if (modifier && !value2){
    result = value1
    } else if (modifier === '+'){
    result = val1 + val2;
    } else if (modifier === '-'){
    result = val1 - val2;
    } else if(modifier === 'x'){
    result = val1 * val2;
    } else if (modifier === '/'){
    result = val1/val2;
  } 


  if(modifier === '/' && value2 === '0'){
    result = 'error';
  };

  setResult(result.toString());
  setValue1(result.toString());
  setValue2('');

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
    alignItems: 'center', 
    border: 'solid',
    backgroundColor: 'red',
    height: '500px',
    justifyContent: 'center',
    width: '300px',
  },
  grid:{
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'auto auto auto auto',
    gridTemplateRows: 'auto auto auto auto',
    justifyContent: 'center'        
  },
  resultBox:{ 
    backgroundColor: 'White',
    border: 'solid',
    height: '15%',
    justifyContent: 'center',
    margin: '10px',
    width: '90%',
  },
  boxContent:{
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
  },
  valueBox:{
    fontFamily: 'arial',
    fontWeight: '800',
    margin: 0,
    marginLeft:5,
    marginRight: 5,
    padding: 0,
  },
  value:{
    margin: 0,
    marginLeft:5,
    padding: 0,
  },
  valueResultBox:{
    margin: 0,
    marginLeft:5,
    marginTop:10,
    padding: 0,
    bottom:5
  },
  valueResult:{
    margin: 0,
    marginLeft:5,
    marginTop:5,
    padding: 0,
    bottom:5,
    fontFamily: 'arial',
    fontWeight: '800',
  },
  modifierBox:{
    margin: 0,
    marginRight:10,
    marginTop:15,
    padding: 0,
   },
  modifierValue:{
    fontFamily: 'arial',
    fontWeight: '800',
    fontSize:'24px',
    margin: 0,
    marginLeft:5,
    marginTop:5,
    padding: 0,
  },
}
return (
  <div style={Styles.container}> 
    <h3 style={{fontFamily:'arial', marginLeft:'5%', color:'white '}}>Calculator</h3>
    <div style={Styles.resultBox}>
      <div style={Styles.boxContent}>
        <div style={Styles.valueBox}> 
          <p style={Styles.value}> {value1} </p>
          <p style={Styles.value}> {value2} </p> 
        </div>
        <div style={Styles.modifierBox}>
            <p style={Styles.modifierValue}>{modifier}</p>
        </div>
      </div>    
        <div style={Styles.valueResultBox}>
          <p style={Styles.valueResult}>{result}</p>
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