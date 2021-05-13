// @flow
import * as React from 'react';
import Calculator from './Components/Calculator'

const Main = (): React.Node => {

const Styles = {
  container:{
    border: 'solid',
  }
}

  return (
   <div style={Styles.container}>
   <Calculator/>
   </div>
  );
}

export default Main;
