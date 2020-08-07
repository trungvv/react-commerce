import React from 'react';
import './form-input.style.scss';
export default function FormInput(props) {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {props.label ? (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={props.name}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
}
