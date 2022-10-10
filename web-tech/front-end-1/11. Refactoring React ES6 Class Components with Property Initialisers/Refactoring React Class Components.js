import React from 'react'

// Without Property initialisers

class Form extends ReactComponents {

  constructor(props) {
    super(props)
    this.state = {id: ''}
    this.submitHandler = this.submitHandler.bind(this)
    this.nameInputHandler = this.nameInputHandler.bind(this)
    this.idInputHandler = this.idInputHandler.bind(this)
  }

  submitHandler() {
    // do more things here ....
    // then dispatch action
    this.props.onSubmitHandler()
  }

  nameInputHandler(e) {
    // to dispatch action (redux)
    this.props.onNameChangeHandler(e.target.value)
  }

  idInputHandler(e) {
    // update local state
    this.setState({id: e.target.value})
  }

  render() {
    return (
      <form>
        <label for="firstname">First name</label>
        <input 
          type="text" name="firstname" id="firstname"
          onChange={e => inputHandler(e)}
        />
        <label for="id">Id</label>
        <input 
          type="text" name="firstname" id="firstname"
          onChange={e => inputHandler(e)}
        />
        <button type="submit" onSubmit={() => this.submitHandler()}>
          Submit
        </button>
      </form>
    )
  }
}

// with property initializers

class Form extends ReactComponents {

  state = {id: ''}

  submitHandler = () => {
    // do more things here ....
    // then dispatch action
    this.props.onSubmitHandler()
  }

  nameInputHandler = (e) => {
    // to dispatch action (redux)
    this.props.onNameChangeHandler(e.target.value)
  }

  idInputHandler = (e) => {
    // update local state
    this.setState({id: e.target.value})
  }

  render() {
    return (
      <form>
        <label for="firstname">First name</label>
        <input 
          type="text" name="firstname" id="firstname"
          onChange={this.nameInputHandler}
        />
        <label for="id">Id</label>
        <input 
          type="text" name="firstname" id="firstname"
          onChange={this.idInputHandler}
        />
        <button type="submit" onSubmit={this.submitHandler}>
          Submit
        </button>
      </form>
    )
  }
}

// Functional component

const Form = ({state, onInputHandler, onSubmitHandler}) => {
  return (
    <form>
      <label for="firstname">First name</label>
      <input 
        type="text" name="firstname" id="firstname"
        onChange={e => onInputHandler(e.target.name, e.target.value)}
      />
      <label for="id">Id</label>
      <input 
        type="text" name="firstname" id="firstname"
        onChange={this.idInputHandler}
      />
      <button type="submit" onSubmit={() => onSubmitHandler()}>
        {state.submitButtonTitle}
      </button>
    </form>
  )
}