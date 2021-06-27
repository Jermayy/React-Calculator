// @flow

import * as React from 'react';
import Button from './Button';


const Calculator = (): React.Node => {

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
            gridTemplateColumns: 'auto auto auto',
            gridTemplateRows: 'auto auto auto',
            gap: '10px',
            justifyContent: 'center'
        
            
  },
  resultBox:{ 
      border: 'solid',
      height: '40px',
      width: '90%',
      backgroundColor: 'White',
       justifyContent: 'center'

  }
}
return (

    <div style={Styles.container}> 
    Calculator

<div style={Styles.resultBox}>
Placeholder result box
</div>

    <div style={Styles.grid}>
       <button>1</button>
       <button>2</button>
       <button>3</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button>+</button>
       <button>-</button>
       <button>X</button>
       <button>Clear</button>
       <button>Total</button>
    </div>
    </div>
     
)

}

export default Calculator;