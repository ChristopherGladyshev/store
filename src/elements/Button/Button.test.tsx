import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';


describe("Button", () => {
  it('renders learn react Button', () => {
    const btn = render(<Button>Clik</Button>);
    expect(btn.getByText(/Clik/i)).toBe;
  });
})
