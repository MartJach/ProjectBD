import React, { Component } from 'react';
import logo from './logo.svg';
import './Login_panel.css';

//panel po zalogowaniu (to będzie następny komponent w następnym pliku)
const Welcome = ({user, onSignOut})=> {
  return (
    <div>
      Witaj <strong>{user.username}</strong>! Tu będzie dalsza część aplikacji
        <div id="button_logout">
          <button className='form_button' onClick={onSignOut}> Wyloguj </button>
        </div>
    </div>
  )
}

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
            <h1 className="App-title">Librarian</h1> 

            <div className='form_inputs'>
                <input type="text" ref="username" placeholder="login" required/> 
            </div>

            <div className='form_inputs'>  
                <input type="password" ref="password" placeholder="hasło" required/> 
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