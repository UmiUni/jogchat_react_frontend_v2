/* @flow */

import { Button, ControlGroup, InputGroup } from '@blueprintjs/core';
import { Field, reduxForm } from 'redux-form';
import React, { PureComponent } from 'react';
import Input from './Input';
import { login } from 'actions/auth';

type Props = {|
  handleSubmit: Function
|};

type State = {|
  isLoginPanelOpen: boolean
|};

export class Login extends PureComponent<Props, State> {
  state = {
    isLoginPanelOpen: false,
  };

  render (): React$Node {
    const { handleSubmit } = this.props;
    const submit = handleSubmit(login);
    return (
      <form onSubmit={submit}>
        <ControlGroup fill={true} vertical={true}>
          <Field
            component={Input}
            render={InputGroup}
            name="Email"
            type="text"
            placeholder="Email"
            leftIcon="person"
            large
          />
          <Field
            component={Input}
            render={InputGroup}
            name="Password"
            leftIcon="lock"
            placeholder="Password"
            type="password"
            large
          />
          <Button large type="submit">
            Login
          </Button>
          <Button>Register</Button>
        </ControlGroup>
      </form>
    );
  }
}

const createReduxForm = reduxForm({ form: 'login' });

export default createReduxForm(Login);
