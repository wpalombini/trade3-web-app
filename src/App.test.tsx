import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/^TRADE3$/);
  expect(linkElements).toHaveLength(2);
  expect(linkElements[0]).toBeInTheDocument();
  expect(linkElements[1]).toBeInTheDocument();
  expect(1 + 1).toBe(0);
});
