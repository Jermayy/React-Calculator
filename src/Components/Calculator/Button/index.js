// @flow

import * as React from 'react';

type Props = {
    children: React.Node,
}


const Button = (children : Props): React.Node => {
    const Styles ={
        container: {
            border: 'solid',
            backgroundColor: '#737373',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
        justifyContent: 'center',
            cursor: 'pointer',
            ':hover':{
                backgroundColor: 'white',
            }
        }
    }

    return (
    
        <div style={Styles.container}>
        {/* {children} */}
        </div>

    )
}

export default Button;