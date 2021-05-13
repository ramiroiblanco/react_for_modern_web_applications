import React, { useState } from 'react'
import { CongratulationsMessage } from '../CongratulationsMessage'
import { CounterButton } from '../CounterButton'
import { DisplayIf } from '../DisplayIf'
import { usePersistentState } from '../usePersistentState'

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks', 0, Number)
  const [hideMessage, setHideMessage] = useState(false)
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