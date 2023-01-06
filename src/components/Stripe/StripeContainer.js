import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51Kmn42HxzdoZduY7JlRpkTwjSnblL2OZxuiEtneKoXdoS9zsATLVPpiYoJ6jUfpYShaM1CrYWthxbymeo727MLtb001vHSCl3u";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({onClick}) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm onClick={onClick}/>
    </Elements>
  );
};

export default Stripe;