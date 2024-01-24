import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../../src/components/SignIn';
jest.mock('../../src/firebase/firebase', () => ({
  signInWithGoogle: jest.fn(),
}));

it('renders sign-in button and calls signInWithGoogle on click', () => {
  const { getByText } = render(<SignIn user={null} />);
  const signInButton = getByText(/Sign in/i);
  expect(signInButton).toBeInTheDocument();

  fireEvent.click(signInButton);
  expect(signInWithGoogle).toHaveBeenCalled();
});
