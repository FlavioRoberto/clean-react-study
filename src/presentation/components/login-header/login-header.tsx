import React, { memo } from 'react';
import Logo from '../logo/logo';
import './login-header-styles.scss';

const LoginHeader: React.FC = () => {
  return (
    <header className='loginHeader'>
      <Logo />
      <h1>CleanReact</h1>
    </header>
  );
};

//memo - previne que componentes staticos sejam reinstanciados devido ao estado do react
export default memo(LoginHeader);
