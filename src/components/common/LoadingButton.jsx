import React from 'react';
import { Spinner } from 'components/common/Spinnners';

export function LoadingButton(props) {
  const { text, variant, className, ...restProps } = props;
  return (
    <button className={`btn btn-${variant} ${className}`} {...restProps}>
      {restProps.disabled ? <Spinner /> : text}
    </button>
  );
}
