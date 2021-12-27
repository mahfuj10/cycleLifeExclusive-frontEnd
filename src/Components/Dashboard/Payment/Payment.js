import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../../Components/Home/Navigation/Navigation/Navigation';
import { Box } from '@mui/system';
import { Container } from '@mui/material';


const stripePromise = loadStripe('pk_test_51K93ltBcGooWtax9JKsV2tP7uqmbQYtdpRXFr4Ey1CHijNCVjRMV8eDkLX1YlNvDJHvktGKwvAjYvzFo93K3j06q00slg9hLuX');

const Payment = () => {

    const { user } = useAuth();

    const [cartProducts, setCartProducts] = useState([]);

    React.useEffect(() => {
        fetch(`https://protected-sea-40292.herokuapp.com/myCart/${user?.email}`)
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [cartProducts, user]);


    // total amount of cart
    let total = 0;
    for (const product of cartProducts) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
    };



    return (
        <section style={{ width: '100vw', height: '100vh', background: '#1D2029' }}>

            <Navigation />
            <Box >
                {
                    total > 0 && <Elements stripe={stripePromise}>
                        <CheckoutForm
                            cartProducts={cartProducts}
                            price={total}
                        />
                    </Elements>
                }
            </Box>
        </section >
    );
};

export default Payment;