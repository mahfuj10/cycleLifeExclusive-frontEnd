import { Grid, Box, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../Product/Product';
import AOS from 'aos';
import "aos/dist/aos.css";
import { searchContext } from '../../Navigation/Navigation/Navigation';

const DemoProduct = () => {

    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchValue] = useContext(searchContext);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 8));
                setSearchProducts(data);
            });
    }, []);


    const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    // setProducts(matchProducts);

    return (
        <section style={{ background: "#111318", padding: 9 }} className='cycle-container'>

            <Box className='container'>

                <Typography data-aos="fade-up" variant='h1' sx={{ fontFamily: 'Hikou Outline', color: "#353B48", fontSize: '70px', pt: 10, letterSpacing: 6 }}>New Arrivals</Typography>

                <Typography variant='h1' sx={{ color: "#ffff", fontSize: '30px', mt: -3, letterSpacing: 3, mb: 8 }}>CYCLES</Typography>

                <Grid container spacing={5} sx={{ pb: 15 }}>

                    {
                        matchProducts.map(product => <Product
                            product={product}
                            key={product.image}
                        />)
                    }

                </Grid >
            </Box>
        </section>
    );
};

export default DemoProduct;