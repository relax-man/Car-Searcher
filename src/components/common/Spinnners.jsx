import React from 'react';

export function SpinnerWithText(props) {
  return (
    <div className={`w-100 d-flex justify-content-center ${props.className}`}>
      <div className="spinner-border" />
      <span className="h5 text-muted m-0 ml-2">Loading...</span>
    </div>
  );
}

export function Spinner(props) {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div
        className={`spinner-border spinner-border-sm my-1 text-${props.variant}`}
      />
    </div>
  );
}

export default SpinnerWithText;
