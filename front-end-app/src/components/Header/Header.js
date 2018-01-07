import React from 'react';
import {
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

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
    <NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>&#9776;</NavbarToggler>
    <NavbarBrand href="#" />
    <NavbarToggler className="d-md-down-none mr-auto" onClick={sidebarToggle}>&#9776;</NavbarToggler>
  </header>
);

export default Header;
