import React from 'react';
import {Col, Row} from 'react-materialize';


const ScoredBoard = (props) =>{
    return(
        <div>
            <Row>
                <Col s={12} className="Table">
                    <strong>User</strong> 
                    <div className="Scoreboard">
                        {props.user}:{props.machine}
                    </div>
                    <strong>Machine</strong>
                </Col>
            </Row>
        </div>
    )
}

export default ScoredBoard;