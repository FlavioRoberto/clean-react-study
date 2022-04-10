import React from 'react';
import './input-styles.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className='inputwrap'>
      <input {...props} />
      <span className='status'>🔴</span>
    </div>
  );
};

export default Input;
