import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccessfull, setMessageSuccessful]= useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccessful(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
      } else {
      console.log(error.message);
    }
  };

  return (
    <div>
         {! messageSuccessfull ?
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button>Pay</button>
    </form>
    :
    <div className="App">
        <h3> <img src="https://img.icons8.com/office/16/null/good-pincode.png" width="30px" alt="icon" /> Your payment was successfu! 
        <img src="https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-enjoy-set-of-stickers-flat-icons-inmotus-design.png" width="30px" alt="icon" />
        </h3>
    </div>
    }
    </div>
  );
};