import React from 'react';
import {Button,Col} from 'react-materialize';

const Buttons = (props) =>{
    return(
        <div>
            <Col s={props.s} className={props.className}>
                <Button value={props.value} onClick={props.onClick}>{props.name}</Button>
            </Col>
        </div>
    )
}

export default Buttons