import React, { useContext } from 'react';
import './form-status.scss';
import Spiner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/contexts/form/form-context';

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div className='errorwrap'>
      {errorMessage && <span className='error'>{errorMessage}</span>}
      {isLoading && <Spiner />}
    </div>
  );
};

export default FormStatus;
