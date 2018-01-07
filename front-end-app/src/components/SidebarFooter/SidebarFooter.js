import React, { Component } from 'react';
import { NavItem, NavLink as RsNavLink } from 'reactstrap';

class SidebarFooter extends Component {
  static logOut() {
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('bankID');
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <nav>
        <ul className="nav">
          <NavItem>
            <RsNavLink href="#" onClick={SidebarFooter.logOut}>
              <i role="none" className="icon-logout"
              />
              Logout
            </RsNavLink>
          </NavItem>
        </ul>
      </nav>
      
    );
  }
}

export default SidebarFooter;
