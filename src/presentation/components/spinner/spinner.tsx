import React from 'react';
import './spinner-style.scss';

type Props = React.HTMLAttributes<HTMLElement>;

const Spiner: React.FC<Props> = (props: Props) => {
  return (
    <div className={['spinner', props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spiner;
