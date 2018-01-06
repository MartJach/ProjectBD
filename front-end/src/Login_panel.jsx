import React, { Component } from 'react';
import logo from './img/logo.png';
import './Login_panel.css';
import {Welcome} from './Home_page.js';



//logowanie formularz
class LoginForm extends React.Component {
  
  handleSignIn(e) { //funkcja ustawiająca dane pobrane z formularza
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  //panel login, haslo, zaloguj, logo
  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <div className='form_items'>

            <img src={logo} className="App-logo" alt="logo" /> 

            <div className='form_inputs'>
                <input type="text" ref="username" placeholder="Nazwa użytkownika" required/> 
            </div>

            <div className='form_inputs'>  
                <input type="password" ref="password" placeholder="Hasło" required/> 
            </div>  

            <button className='form_button'> Zaloguj </button>
        </div> 
      </form>
    )
  }

}
//app logowanie
export class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {user: null}
  }
  signIn(username, password) {
    this.setState({
      user: { username, password}
    })
  } 
  signOut() {
    this.setState({user: null})
  }

  render() {
    return (
      <div className='Login' >
        { 
          (this.state.user) ? //warunek, jeżeli state.user=null wyświetli logowanie
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    );
  }
}