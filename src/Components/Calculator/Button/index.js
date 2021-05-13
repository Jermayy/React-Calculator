// @flow

import * as React from 'react';

const Button = (): React.Node => {
    const Styles ={
        container: {
            border: 'solid',
            backgroundColor: 'white',
            width: '50px',
            height: '50px'
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