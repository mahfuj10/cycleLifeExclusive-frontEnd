import { useHistory } from "react-router";
import useAuth from "./useAuth";

const useCart = () => {

    const { user } = useAuth();
    const history = useHistory();

    // product added on cart

    const AddToCart = product => {
        if (!user.email) {
            history.push('/login')
            return
        }
        product.email = user.email;
        product.payment = 'unpaid';
        product.status = 'pending';
        fetch('https://protected-sea-40292.herokuapp.com/addToCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                alert("this product added on cart")
            });
    };



    return {
        AddToCart
    };


};

export default useCart;