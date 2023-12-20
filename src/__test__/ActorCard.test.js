import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each'; // For additional matchers

import ActorCard from '../components/ActorCard';

describe('ActorCard', () => {
  const mockActor = {
    name: 'Luke Skywalker',
    height: '172',
    birth_year: '19 BBY',
  };

  test('renders actor details correctly', () => {
    render(<ActorCard actor={mockActor} />);

    
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth Year: 19 BBY/i)).toBeInTheDocument();
  });
});
