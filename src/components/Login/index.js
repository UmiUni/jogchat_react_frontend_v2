/* @flow */

import {
  Button,
  ControlGroup,
  InputGroup
} from '@blueprintjs/core';
import React, { PureComponent } from 'react';

type Props = {||};

type State = {|
  isLoginPanelOpen: boolean
|};

export class Login extends PureComponent<Props, State> {
  state = {
    isLoginPanelOpen: false,
  }

  render (): React$Node {
    return (
      <ControlGroup fill={true} vertical={true}>
        <InputGroup large leftIcon="person" placeholder="Username" />
        <InputGroup large leftIcon="lock" placeholder="Password" type="password" />
        <Button large>Login</Button>
        <Button>Register</Button>
      </ControlGroup>
    );
  }
}

export default Login;
