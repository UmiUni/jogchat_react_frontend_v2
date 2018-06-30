/* @flow */

import {
  Alignment,
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Popover,
  PopoverInteractionKind,
  Position
} from '@blueprintjs/core';
import React, { PureComponent } from 'react';
import Login from 'components/Login';

type Props = {||};

type State = {|
  isLoginPanelOpen: boolean
|};

class Header extends PureComponent<Props, State> {
  state = {
    isLoginPanelOpen: false,
  }

  _handleInteraction = (nextOpenState: boolean) => {
    this.setState({ isLoginPanelOpen: nextOpenState });
  }

  render (): React$Node {
    return (
      <Navbar className="pt-dark">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>JogChat</NavbarHeading>
          {/* <input className="pt-input" placeholder="Search..." type="text" /> */}
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Popover
            content={<Login />}
            interactionKind={PopoverInteractionKind.CLICK}
            isOpen={this.state.isLoginPanelOpen}
            onInteraction={this._handleInteraction}
            position={Position.BOTTOM_RIGHT}
          >
            <Button minimal icon="user" />
          </Popover>
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Header;
