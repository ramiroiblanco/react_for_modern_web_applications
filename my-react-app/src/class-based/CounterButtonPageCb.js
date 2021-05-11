import React from 'react'
import { DisplayIf } from '../DisplayIf'
import { CongratulationsMessageCb } from './CongratulationsMessageCb'
import { CounterButtonCb } from './CounterButtonCb'

export class CounterButtonPageCb extends React.Component {
  state = {
    hideMessage: false,
    numberOfClicks: 0
  }

  render () {
    const {hideMessage, numberOfClicks} = this.state

    const increment = () => {
      this.setState({numberOfClicks: this.state.numberOfClicks + 1})
    }

    return (
      <>
        <h1>Counter Button Page</h1>
        <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
          <CongratulationsMessageCb threshold={10}
                                  onHide={() => this.setState({hideMessage: true})}/>
        </DisplayIf>
        <CounterButtonCb onIncrement={increment} numberOfClicks={numberOfClicks}/>
      </>
    )
  }
}