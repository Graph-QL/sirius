import React from 'react'

export default class TodoForm extends React.Component {

  state = {value: ''}

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}