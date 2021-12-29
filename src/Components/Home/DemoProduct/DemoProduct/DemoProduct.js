import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../Product/Product';
import AOS from 'aos';
import "aos/dist/aos.css";
import { searchContext } from '../../Navigation/Navigation/Navigation';
import { useHistory } from 'react-router';

const DemoProduct = () => {

    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchValue] = useContext(searchContext);
    const history = useHistory();

    // data aos
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    // explore button styles
    const exploreButton = {
        border: '1px solid #98a1bc',
        padding: '10px 40px',
        borderRadius: 1,
        color: '#98a1bc',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50
    };


    useEffect(() => {
        fetch('https://whispering-ridge-34346.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products.slice(0, 8));
                setSearchProducts(data);
            });
    }, []);


    // match product
    const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    // setProducts(matchProducts);



    return (
        <section style={{ background: "#111318", padding: 9 }} className='cycle-container'>

            <Box className='container'>

                <Typography data-aos="fade-up" variant='h1' sx={{ fontFamily: 'Hikou Outline', color: "#353B48", fontSize: ' 70px', pt: 10, letterSpacing: 6 }}>New Arrivals</Typography>

                <Typography variant='h1' sx={{ color: "#ffff", fontSize: '30px', mt: -3, letterSpacing: 3, mb: 8 }}>CYCLES</Typography>

                {
                    matchProducts.length === 0 ?
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress sx={{ color: 'whitesmoke' }} />
                        </Box>
                        :
                        <Grid container spacing={5} sx={{ pb: 15 }}>

                            {
                                matchProducts.map(product => <Product
                                    product={product}
                                    key={product.image}
                                />)
                            }

                            <Button
                                onClick={() => history.push('/cycles')}
                                style={exploreButton}>
                                EXPLORE MORE
                            </Button>
                        </Grid >}
            </Box>
        </section>
    );
};

export default DemoProduct;