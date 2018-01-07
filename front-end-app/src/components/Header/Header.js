import React from 'react';
import {
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import Logo from '../../../public/img/logoBlack.png';

const styles = {
  logoStyle: {
    height: '20px',
    margin: '0 1.2rem 0 1.2rem',
  },
};

function sidebarToggle(e) {
  e.preventDefault();
  document.body.classList.toggle('sidebar-hidden');
}

function sidebarMinimize(e) {
  e.preventDefault();
  document.body.classList.toggle('sidebar-minimized');
}

function mobileSidebarToggle(e) {
  e.preventDefault();
  document.body.classList.toggle('sidebar-mobile-show');
}

function asideToggle(e) {
  e.preventDefault();
  document.body.classList.toggle('aside-menu-hidden');
}

const Header = () => (
  <header className="app-header navbar">
    <img src={Logo} style={styles.logoStyle} /> 
    <NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>&#9776;</NavbarToggler>
    <NavbarToggler className="d-md-down-none mr-auto" onClick={sidebarToggle}>&#9776;</NavbarToggler>
  </header>
);

export default Header;
