import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, loginUser } from '../../../actions';

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const { name, email, password } = this.state;
    const { value } = e.target;
    const loginData = {
      email: email.toLowerCase(),
      password: password
    } 
    const signupData = {
      name: name,
      email: email.toLowerCase(),
      password: password
    } 
    // if (value === 'Log In') {
    //   this.validateUser('/api/users', loginData);
    // }
    // if (value === 'Sign Up') {
    //   this.createUser('/api/users/new', signupData);
    // }
    switch(e.target.value) {

      case('Log In'):
        console.log('LogIn', e.target.value);
        return this.validateUser('/api/users', loginData);

      case('Sign Up'):
        console.log('SignUp', e.target.value);
        return this.validateUser('/api/users/new', signupData);
    }
  }

  async validateUser(url = '', loginData = {}) {
    try {
      const results = await this.fetchUser(url, loginData);
      this.props.loginUser(results.data.id, loginData.name);
    } catch(error) {
        throw new Error('incorrect email/password');
      }
  }

  async createUser(url = '', signupData = {}) {
    try {
      const results = await this.fetchUser(url, signupData);
      this.props.loginUser(results.id, signupData.name); 
    } catch(error) {
      throw new Error('user already exists');
    }
  }

  async fetchUser(url, data) {
    const response = await fetch(`http://localhost:3000${url}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), 
    })
    const results = await response.json();
    return results;
  }

  render() {
    return (
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        <label htmlFor='email'>Email:</label>
        <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
        <label htmlFor='password'>Password:</label>
        <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />
        <button value="Log In" onClick={this.handleSubmit}>Log In</button>
        <button value="Sign Up" onClick={this.handleSubmit}>Sign Up</button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  loginUser: (id, name) => dispatch(loginUser(id, name)),
})

export default connect(null, mapDispatchToProps)(Account);