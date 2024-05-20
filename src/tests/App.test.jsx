import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from '../App';
import Login from '../pages/Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/e-mail/i);
  expect(linkElement).toBeInTheDocument();
});
