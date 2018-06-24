import React, { PureComponent } from 'react';
import {
  Navbar,
  Alignment,
  Button,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
} from '@blueprintjs/core';

class Header extends PureComponent {
  render() {
    return (
      <Navbar className="pt-dark">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>JogChat</NavbarHeading>
          <input className="pt-input" placeholder="Search..." type="text" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button minimal icon="home" text="Home" />
          <NavbarDivider />
          <Button minimal icon="user" />
          <Button minimal icon="notifications" />
          <Button minimal icon="cog" />
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Header;
