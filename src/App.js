import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import Board from './Components/Board';

// Making the App component
class App extends Component {
  constructor() {
    super()    
    const socket = socketIOClient(this.state.endpoint);
    socket.on('action', (message) => {
      console.log(message);
    })
  }

    // sending sockets
    send = () => {
      const socket = socketIOClient(this.state.endpoint);
      socket.emit('action', this.state.message) 
    }
  
  render() {
    return (
      <div>
        <Board/>
        <button onClick={()=> this.send()}>send</button>
      </div>
    );
  }
}

export default App