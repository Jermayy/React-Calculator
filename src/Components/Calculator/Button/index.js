// @flow

import * as React from 'react';

const Button = (): React.Node => {
    const Styles ={
        container: {
            border: 'solid',
            backgroundColor: 'grey',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
        justifyContent: 'center',
            // cursor: 'pointer',
            ':hover':{
                backgroundColor: 'blue',
                cursor: 'hand'
            }
        }
    }

    return (
        <>
        <div style={Styles.container}>
            #
        </div>
        </>
    )
}

export default Button;