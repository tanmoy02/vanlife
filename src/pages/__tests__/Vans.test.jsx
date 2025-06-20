import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To handle <Link> component
import Vans from '../Vans';

describe('Vans Page', () => {
  it('renders the Vans page placeholder content', () => {
    // This component currently doesn't have much content.
    // We'll check for the "Vans page goes here" text.
    // This test might need to be updated if the component changes significantly.
    render(
      <MemoryRouter>
        <Vans />
      </MemoryRouter>
    );
    expect(screen.getByText(/Vans page goes here/i)).toBeInTheDocument();
  });
});
