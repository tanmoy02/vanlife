import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To handle <Link> component
import Home from '../Home';

describe('Home Page', () => {
  it('renders the Home page content', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/You got the travel plans, we got the travel vans./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Find your van/i })).toBeInTheDocument();
  });
});
