import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'frankenstein'
        },
        {
          name: 'Dracula',
          id: 'dracula'
        },
        {
          name: 'Zombie',
          id: 'zombie'
        }
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster =>  (
            <h1 key={monster.id}>{monster.name}</h1> )
          )}
      </div>
    );
  }
}

export default App;
