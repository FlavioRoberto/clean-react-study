import React, { useState } from 'react';
import './login-style.scss';
import {
  Footer,
  FormStatus,
  Input,
  Link,
  LoginHeader,
} from '@/presentation/components';
import Context from '@/presentation/contexts/form/form-context';

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  });

  return (
    <div className='login'>
      <LoginHeader />
      <Context.Provider value={state}>
        <form>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='digite seu e-mail' />
          <Input
            type='password'
            name='password'
            placeholder='digite sua senha'
          />
          <button type='submit'>Entrar</button>
          <Link description='Criar conta' />
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
