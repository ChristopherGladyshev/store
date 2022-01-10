
import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';


describe("Link", () => {
  it('renders learn react link', () => {
    const link = render(<Link href='https://test.com' >Clik</Link>);
    expect(link.getByText(/Clik/i)).toHaveAttribute('href', 'https://test.com');
  });
})
