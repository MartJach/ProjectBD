import React, { Component } from 'react';
import logo from './logo.svg';
import add from './add.svg';
import search from './search.svg';
import home from './home.svg';
import power from './power.svg';
import './Home_page.css';
import {Publisher} from './Publisher.js';

export class Welcome extends React.Component { 
 render(){
    return (
    <div className='container'>

        <div className='navbar'>
            <nav>
                Witaj <strong>{this.props.user.username}</strong>! 
                <img src={logo} className="nav-logo" alt="logo" /> Librarian
					<ul className='navigation'>
						<li><img src={add} className="nav-icons" alt="add" /> </li>
						<li><img src={search} className="nav-icons" alt="search" /></li>
						<li><img src={home} className="nav-icons" alt="home" /></li>
						<li><img src={power} className="nav-icons" alt="power" onClick={this.props.onSignOut}/></li>
					</ul>
			</nav>
        </div>
        
        <div className='publisher'>
        <Publisher />
        </div>

    </div>
  )
 }
}