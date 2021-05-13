// @flow

import * as React from 'react';
import Button from './Button';


const Calculator = (): React.Node => {

const Styles = {
  container:{
    border: 'solid',
    backgroundColor: 'grey',
    width: '300px',
    height: '500px'
  }
}
return (
     <div style={Styles.container}>
        Calculator
        <Button/>
    </div>
)

}

export default Calculator;