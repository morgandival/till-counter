import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App component render', () => {
  render(<App />);

  const myApp = screen.queryByLabelText('div id="App"');

  expect(myApp).toBeTruthy; // .toBeInTheDocument;
});
