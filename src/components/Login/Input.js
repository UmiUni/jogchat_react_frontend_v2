/* @flow */

import React, { PureComponent } from 'react';

type Props = {|
  render: React$ElementType,
  input: any
|};

/**
 * An enhanced input that allows you to combine the powerfulness of redux form
 * with flexibility of Blueprint
 *
 * @class      Field (name)
 */
class Input extends PureComponent<Props> {
  render (): React$Node {
    const { render: Component, input, ...rest } = this.props;
    return <Component {...input} {...rest} />;
  }
}

export default Input;
