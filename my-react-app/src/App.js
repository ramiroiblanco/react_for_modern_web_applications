import './App.css'
import { Greeting } from './Greeting'
import { PeopleList } from './PeopleList'
import React from 'react'

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown'
  },
  {
    name: 'Helga',
    age: 25,
    hairColor: 'red'
  },
  {
    name: 'Dwayne',
    age: 55,
    hairColor: 'blonde'
  }]

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Milchanchis" numberOfMessages={10}/>
        <PeopleList people = {people}/>
        <p>
          This is so cool.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
