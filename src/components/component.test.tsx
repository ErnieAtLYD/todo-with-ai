import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './component';

describe('Component', () => {
  it('renders without crashing', () => {
    render(<Component />);
    expect(screen.getByText(/component/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
