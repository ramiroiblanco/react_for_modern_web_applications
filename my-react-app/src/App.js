import './App.css'
import { CounterButton } from './CounterButton'
import React, { useState } from 'react'
import { CongratulationsMessage } from './CongratulationsMessage'

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
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  const [hideMessage, setHideMessage] = useState(false)

  const increment = () => setNumberOfClicks(numberOfClicks + 1)

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          : <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10}
                                    onHide={() => setHideMessage(true)}/>}

        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
      </header>
    </div>
  )
}

export default App
