import React, { Component } from 'react'
import Person from './Person/Person.js'
import logo from './logo.svg'
import './App.css'
import './Person/Person.css'
class App extends Component {
  state = {
    persons: [
      { id: 'a21', name: 'max', age: 24 },
      { id: 'a22', name: 'mill', age: 23 },
      { id: 'a23', name: 'maximill', age: 22 }
    ],
    showPersons: false
  }
  // switchNameHandler = newName => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 25 },
  //       { name: 'hardik', age: 25 },
  //       { name: 'hardik', age: 26 }
  //     ]
  //   })
  // }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
    console.log(`called`)
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: '10px',
      color: 'white',
      border: 'none',
      outline: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => (
            <Person
              name={p.name}
              age={p.age}
              key={p.id}
              clicked={() => this.deletePersonHandler(index)}
              changed={event => this.nameChangedHandler(event, p.id)}
            />
          ))}
        </div>
      )
      buttonStyle.backgroundColor = 'red'
    }
    return (
      <div className='App'>
        <h1>This is React App</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Button
        </button>
        <div>{persons}</div>
      </div>
    )
  }
}

export default App
