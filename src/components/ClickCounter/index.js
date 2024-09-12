import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="click-counter-container">
        <div className="card-container">
          <h1 className="counter-heading">
            The Button has been clicked{' '}
            <span className="counter-text">{count}</span> times
          </h1>
          <p className="counter-description">
            Click the button to increase the count
          </p>
          <button
            type="button"
            className="click-me-button"
            onClick={this.onIncrement}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
