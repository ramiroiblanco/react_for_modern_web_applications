import React, { useState, useEffect } from 'react'
import { CongratulationsMessage } from '../CongratulationsMessage'
import { CounterButton } from '../CounterButton'
import { DisplayIf } from '../DisplayIf'

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(Number(localStorage.getItem('numberOfClicks')) || 0)
  const [hideMessage, setHideMessage] = useState(false)

  useEffect(() => {
    localStorage.setItem('numberOfClicks', String(numberOfClicks))
  }, [numberOfClicks])

  const increment = () => setNumberOfClicks(numberOfClicks + 1)

  return (
    <>
      <h1>Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationsMessage threshold={10}
                                onHide={() => setHideMessage(true)}/>
      </DisplayIf>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
    </>
  )
}