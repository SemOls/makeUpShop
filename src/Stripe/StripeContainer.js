import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MD5FQGq8CWIhXfrCaROtojrqmnnmKZDBq7jy0j1O458Shm2oha16do2fBA8IlOfslBXv0MvHwukbSxXWuyUXcpC00y5wOB7rP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;