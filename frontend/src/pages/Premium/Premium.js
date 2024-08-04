
////////////
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import './Premium.css'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

// Load the Stripe object
const stripePromise = loadStripe('pk_test_51PIyDLSAEV6wGdlPddfPidtG2xKJYQl2TJgZVokkYvg5fa1WwiBllrz1jmxoextpje7HSM8YXQrjlHrxv00Sh5GY00vdUzwVTv');

const Premium = () => {
  const handleSubscribe = async (priceId) => {
    try {
      // Create a Checkout Session on the server
      const response = await axios.post('https://twitterapp-backend-n4d9.onrender.com/create-checkout-session', {
        plan: priceId,
        email: 'user@example.com'  // Replace with dynamic user email
      });

      const sessionId = response.data.id;

      // Wait for the Stripe object to be ready
      const stripe = await stripePromise;

      // Redirect to Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error("Stripe checkout error", error);
      }
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return (
    <div className='page premium'>
      <h2 className='pageTitle'>Choose a Subscription Plan</h2>
      <div className='card'>
        <h2>BASIC</h2>
        <h4>10$/Mon.</h4>
        <ul>
          <li><CheckIcon/> Increased Posting limits</li>
          <li><CheckIcon/> Priority Support</li>
          <li><CheckIcon/> Advanced Analytics</li>
          <li><CheckIcon/> Exclusive Content</li>
          <li style={{color:'grey'}}><ClearIcon/> Customisation & Security</li>
        </ul>
        <button onClick={() => handleSubscribe('price_1PIyYaSAEV6wGdlPxrdpZnvq')}>Checkout</button>

      </div>
      <div className='card'>
        <h2>ADVANCED</h2>
        <h4>100$/Yr.</h4>
        <ul>
          <li><CheckIcon/> All monthly plan features</li>
          <li><CheckIcon/> Significant Discount</li>
          <li><CheckIcon/> Extended Analytics</li>
          <li><CheckIcon/> Enhanced Security</li>
          <li><CheckIcon/> Customization </li>
        </ul>
        <button onClick={() => handleSubscribe('price_1PIyaKSAEV6wGdlPJ4k5vq5A')}>Checkout</button>
      </div>
    </div>
  );

};


const PremiumPage = () => (
  <Elements stripe={stripePromise}>
    <Premium />
  </Elements>
);

export default PremiumPage;