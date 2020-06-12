import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {container, getByText} = render(<CheckoutForm />);

    const header = container.querySelector('h2')
    expect(header.textContent).toBe('Checkout Form')
});

test("form shows success message on submit with form details", () => {});
