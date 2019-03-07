import React from 'react'
import ReactDOM from 'react-dom'

// ===============
//  Components
// ===============
import Game from './Components/LogicGame';


class App extends React.Component{
    render(){
        return(
            <div>
                <Game/>
            </div>
        )   
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))