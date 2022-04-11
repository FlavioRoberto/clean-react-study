import React from 'react';
import './login-style.scss';
import {
  Footer,
  FormStatus,
  Input,
  Link,
  LoginHeader,
} from '@/presentation/components';

const Login: React.FC = () => {
  return (
    <div className='login'>
      <LoginHeader />
      <form>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='digite seu e-mail' />
        <Input type='password' name='password' placeholder='digite sua senha' />
        <button type='submit'>Entrar</button>
        <Link description='Criar conta' />
        <FormStatus error='erro' />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
