import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export const CheckoutForm = ({ onClick }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = await onClick();
    if (user) {
      if (user.email && user.password) {
        const response = await fetch("https://myrizq-backend.onrender.com/user/signup", {
          method: "POST",
          body: JSON.stringify([user]),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const data = await response.json();

        if (data && data.status == "0000") {
          const stripeSuccess = await stripeCall(user);
        } else if (data && data.status == "9999") {
          swal("Error!", data.message, "error");
        } else {
          swal("Error!", "Something went wrong!", "error");
        }
      }
    }
  };

  const stripeCall = async (user) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await fetch("https://myrizq-backend.onrender.com/stripe/charge", {
          method: "POST",
          body: JSON.stringify( {
            amount: 999,
            id: id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

      

        if (response.data.success) {
          swal("Success!", "User register successfully!", "success").then(
            (m) => {
              router.push("/signin");
            }
          );
        } else {
            deleteUser(user);
          swal("Error!", response.data.message, "error");
        }
      } catch (error) {
        deleteUser(user);
        swal("Error!", error.message, "error");
      }
    } else {
        console.log("error : ",error);
      deleteUser(user);
      swal("Error!", error.message, "error");
    }
  };

 async function deleteUser(user) {

    const response = await fetch("https://myrizq-backend.onrender.com/user/delete", {
          method: "POST",
          body: JSON.stringify([user]),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button type="submit" class="btn bg-green text-white w-100 mb-2 mt-4">
        Create Account
      </button>
    </form>
  );
};
