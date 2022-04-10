import React from 'react';
import './form-status.scss';
import Spiner from '@/presentation/components/spinner/spinner';

type Props = {
  error: string;
};

const FormStatus: React.FC<Props> = (props: Props) => {
  return (
    <div className='errorwrap'>
      <span className='error'>{props.error}</span>
      <Spiner />
    </div>
  );
};

export default FormStatus;
