import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import person from '../person'

// test('Load and displays starter data', async () => {
//     render(<App />);
//     const name = await waitFor(() => screen.findByTestId('name'));
//     // expect(name).toHaveTextContent(`My name is Waleed`)
//   });


  test( 'renders the person ', () => {
    render( <person /> );
    const person = screen.getByTestId( 'person' );
    expect( person ).toBeInTheDocument();
} );