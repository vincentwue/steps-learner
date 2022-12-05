import React from 'react';
import { render, screen } from '@testing-library/react';
import Learner from './Learner';

test('renders learn react link', () => {
  render(<Learner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
