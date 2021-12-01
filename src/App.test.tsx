import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render h1 element', () => {
  render(<App />);
  expect(screen.getByText('Till Counter')).toBeInTheDocument;
});
