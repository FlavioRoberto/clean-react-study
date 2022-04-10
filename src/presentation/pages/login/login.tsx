import React from 'react';
import './login-style.scss';
import Spiner from '@/presentation/components/spinner/spinner';
import Link from '@/presentation/components/link/link';
import Header from '@/presentation/components/login-header/login-header';
import Footer from '@/presentation/components/footer/footer';

const Login: React.FC = () => {
  return (
    <div className='login'>
      <Header />
      <form>
        <h2>Login</h2>
        <div className='inputwrap'>
          <input type='email' name='email' placeholder='digite seu e-mail' />
          <span className='status'>🔴</span>
        </div>

        <div className='inputwrap'>
          <input
            type='password'
            name='password'
            placeholder='digite sua senha'
          />
          <span className='status'>🔴</span>
        </div>
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
