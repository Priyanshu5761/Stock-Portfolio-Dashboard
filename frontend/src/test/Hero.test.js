import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
  test('renders the Hero component with correct content', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('HeroImage');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'images-20260604T070444Z-3-001/images/homeHero.png');
  });

  test('renders signup button', () => {
    render(<Hero />);
    const signupButton = screen.getByRole('button', { name: 'Signup Now' });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass('btn-primary');
  });
});