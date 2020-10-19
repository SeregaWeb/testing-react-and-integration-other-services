import React, {Component} from 'react'
import './App.css';
import FirstComponent from './components/ComponentFirst/ComponentFirst';
import Table from './components/Table/Table';
import Form from './components/Table/Form';
import Wikipedia from './components/Api/Wikipedia';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  };

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  };

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  };

  render() {
    return (
      <div className="container">
        <FirstComponent/>
        <div className="row">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
        </div>
        <Wikipedia/>
      </div>
    )
  }
}

export default App;
