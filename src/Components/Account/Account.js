import React, { Component } from 'react';

export class Account extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const userData = {
      email: email.toLowerCase(),
      password: password
    } 
    if (e.target.innerText === 'Log In') {
      this.validateUser('/api/users', userData);
    }
  }

  async validateUser(url = '', userData = {}) {
    try {
      const response = await fetch(`http://localhost:3000${url}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
      })
      const data = await response.json();
      console.log(data);
    } catch(error) {
        throw new Error('test');
      }
  }

  render() {
    return (
      <form>
        <label htmlFor='email'>Email:</label>
        <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
        <label htmlFor='password'>Password:</label>
        <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Log In</button>
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    )
  }
}