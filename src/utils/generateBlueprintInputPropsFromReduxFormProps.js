/* @flow */

import type { FieldProps } from 'redux-form';

export const generateBlueprintInputPropsFromReduxFormProps = (props: FieldProps): any => {
  return {
    value: props.input.value,
    onChange: props.input.onChange
  };
};
