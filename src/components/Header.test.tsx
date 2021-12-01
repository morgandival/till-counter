import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Render header element', () => {
  const props = { title: 'Till Counter' };
  render(<Header title={props.title} />);

  expect(screen.getByText('Till Counter')).toBeInTheDocument;
});
