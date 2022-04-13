import React from 'React';
import { render } from '@testing-library/react';
import Login from './login';

describe('Login component', () => {
  test('Should not render spinner and error on start', () => {
    const { container } = render(<Login />);
    const errorWrap = container.getElementsByClassName('errorwrap')[0];
    expect(errorWrap.childElementCount).toBe(0);
  });
});
