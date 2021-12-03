import React from 'react';
// import MutationObserver from 'mutationobserver-shim';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('renders without errors', () => {
	render(<CheckoutForm />);
});

test('shows success message on submit with form details', () => {
	render(<CheckoutForm />);
	// find fields
	const firstNameField = screen.queryByText('firstName');
	const lastNameField = screen.queryByText('lastName');
	const addressField = screen.queryByText('address');
	const cityField = screen.queryByText('city');
	const stateField = screen.queryByText('state');
	const zipField = screen.queryByText('zip');

	// enter text
	// userEvent.type(firstNameField, 'roxanne');
	// userEvent.type(lastNameField, 'weber');
	// userEvent.type(addressField, '123 my address lane');
	// userEvent.type(cityField, 'the City');
	// userEvent.type(stateField, 'CA');
	// userEvent.type(zipField, '57895');

	//find submit
	const checkoutButton = screen.getByRole('button');
	// // click submit
	userEvent.click(checkoutButton);
	// // find success message on screen
	const submitSuccessMsg = screen.queryByText(/Woo-hoo!/i);
});
