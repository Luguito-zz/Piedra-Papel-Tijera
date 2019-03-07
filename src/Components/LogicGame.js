import React,{useState} from 'react';
import {Col, Row, Button} from 'react-materialize';
import Buttons from './Buttons';
import ScoreBoard from './ScoreBoard';
import '../Css/Game.scss'
/**
 *  Primero hagamos un array con un numero al azar. Del 0 al 2
 * el 0 sera piedra
 * el 1 ser papel
 * y por ultimo el 2 sera tijera
 * La funcion de generar este numero al azar debe ser dispara con cada click
 * de tal manera que esta misma funcion debe crear el array y comparar nuestra eleccion.
 * 
 * De momento nuestras jugadas seran botones ( inputs ) por ende el valor de cada boton se definira al inicio
 * tambien se debe almacenar el resultado de la comparacion para ir mostrar cuantos puntos lleva cada ganador
 * como un marcador.
 */


const LogicGame = () =>{
    const [user,setUser] = useState(0)
    const [machine,setMachine] = useState(0)
    const [result,setResult] = useState('')


    const compareResults = (num, jugada) =>{
        if(num === jugada){
            setResult('Empate')
        }
        else if(num === 0){
            if(jugada === 1){
                setUser(user + 1)
                setResult('Gano el Usuario')
            }else{
                setMachine(machine + 1)
                setResult('Gano la Maquina')
            }
        }
        else if(num === 1){
            if(jugada === 2){
                setUser(user + 1)
                setResult('Gano el Usuario')
            }else{
                setMachine(machine + 1)
                setResult('Gano la Maquina')
            }
        }
        else if(num === 2){
            if(jugada === 0){
                setUser(user + 1)
                setResult('Gano el Usuario')
            }else{
                setMachine(machine + 1)
                setResult('Gano la Maquina')
            }
        }
    }

    const Game = (e) =>{
        setResult('')
        const num = Math.floor(Math.random()*3+0)
        const jugada = Number.parseInt(e.target.value)
        compareResults(num, jugada);
     
    }

    return(
        <div>
            <ScoreBoard
            user={user}
            machine={machine}
            />
            <Row className="jugadas">
                <Buttons
                    s={4}
                    className={'button-center'}
                    name={'Piedra'}
                    value={0}
                    onClick={Game}
                />
                <Buttons
                    s={4}
                    className={'button-center'}
                    name={'Papel'}
                    value={1}
                    onClick={Game}
                />
                <Buttons
                    s={4}
                    className={'button-center'}
                    name={'Tijera'}
                    value={2}
                    onClick={Game}
                />
            </Row>
            <Row>
                <Col s={12} className="Winner">            
                <div className="Winner2">       
                    {result}
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default LogicGame;