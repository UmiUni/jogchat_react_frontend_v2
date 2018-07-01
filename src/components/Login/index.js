/* @flow */

import {
  Button,
  ControlGroup,
  InputGroup
} from '@blueprintjs/core';
import { Field, reduxForm } from 'redux-form';
import React, { PureComponent } from 'react';
import { generateBlueprintInputPropsFromReduxFormProps } from 'utils';
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
  }

  render (): React$Node {
    const { handleSubmit } = this.props;
    const submit = handleSubmit(login);
    return (
      <form onSubmit={submit}>
        <ControlGroup fill={true} vertical={true}>
          <Field
            component={(props: any): React$Node => (
              <InputGroup {...generateBlueprintInputPropsFromReduxFormProps(props)}
                large leftIcon="person" placeholder="Username"
              />
            )}
            name="Username" type="text" placeholder="Username"
          />
          <Field
            component={(props: any): React$Node => (
              <InputGroup {...generateBlueprintInputPropsFromReduxFormProps(props)}
                large leftIcon="lock" placeholder="Password" type="password"
              />
            )}
            name="Password" type="password" placeholder="Password"
          />
          <Button large type="submit">Login</Button>
          <Button>Register</Button>
        </ControlGroup>
      </form>
    );
  }
}

const createReduxForm = reduxForm({ form: 'login' });

export default createReduxForm(Login);
