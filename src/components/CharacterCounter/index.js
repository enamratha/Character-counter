import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    words: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitWord = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.length !== 0) {
      const newWord = {
        id: v4(),
        word: userInput,
      }
      this.setState(prevState => ({
        words: [...prevState.words, newWord],
        userInput: '',
      }))
    }
  }

  renderOutput = () => {
    const {words} = this.state
    if (words.length === 0) {
      return (
        <img
          className="counter-img"
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
        />
      )
    }
    return (
      <ul className="word-list">
        {words.map(each => (
          <li className="word-count" key={each.id}>
            <p>{each.word}</p>
            <p>: {each.word.length}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="main-container">
        <div className="output-container">
          <h1>Count the characters like a Boss...</h1>
          <div className="result-container">{this.renderOutput()}</div>
        </div>
        <form className="counter-container" onSubmit={this.onSubmitWord}>
          <h1>Character Counter</h1>
          <div className="input-section">
            <input
              className="input-element"
              onChange={this.onChangeUserInput}
              value={userInput}
              placeholder="Enter the Characters here"
              type="text"
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CharacterCounter
