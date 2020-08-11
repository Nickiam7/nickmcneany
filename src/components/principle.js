import React from 'react';


import { Col6 } from './styles/global';

const Principle = (props) => {
    return(
        <Col6>
            <div key={props.principleKey}>
                <h3>{props.principle}</h3>
                <p>{props.content}</p>
            </div>
        </Col6>
    )
}

export default Principle;