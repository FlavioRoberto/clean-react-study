import React from 'react';
import './input-styles.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  return (
    <div className='inputwrap'>
      <input readOnly onFocus={enableInput} {...props} />
      <span className='status'>🔴</span>
    </div>
  );
};

export default Input;
