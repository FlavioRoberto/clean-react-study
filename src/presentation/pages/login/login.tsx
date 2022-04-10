import React from 'react';
import './login-style.scss';
import Spiner from '@/presentation/components/spinner/spinner';
import Link from '@/presentation/components/link/link';
import Header from '@/presentation/components/login-header/login-header';
import Footer from '@/presentation/components/footer/footer';
import Input from '@/presentation/components/input/input';

const Login: React.FC = () => {
  return (
    <div className='login'>
      <Header />
      <form>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='digite seu e-mail' />
        <Input type='password' name='password' placeholder='digite sua senha' />
        <button type='submit'>Entrar</button>
        <Link description='Criar conta' />
        <div className='errorwrap'>
          <span className='error'>Erro</span>
          <Spiner />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
