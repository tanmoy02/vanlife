import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Page', () => {
  it('renders the About page content', () => {
    render(<About />);
    expect(screen.getByText(/Don’t squeeze in a sedan when you could relax in a van./i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Our mission is to enliven your road trip with the perfect travel van rental./i })).toBeInTheDocument();
  });
});
