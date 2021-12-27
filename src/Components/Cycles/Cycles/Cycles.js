import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material';
import './Cycle.css';
import Aos from 'aos';
import Navbar, { searchContext } from '../../Home/Navigation/Navigation/Navigation';
import Footer from '../../Home/Footer/Footer';
import Cycle from '../Cycle/Cycle';

const Cycles = () => {

    const [cycles, setCycles] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchValue] = useContext(searchContext);
    const size = 8;

    // fetch data

    useEffect(() => {
        fetch(`http://localhost:5000/cycles?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCycles(data.products);
                setSearchProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    // match product
    const matchProducts = cycles.filter(cycle => cycle.name.toLowerCase().includes(searchValue.toLowerCase()));

    // aos
    React.useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    // pagination button
    const paginationButton = {
        height: 40,
        width: 40,
        borderRadius: '50%',
        border: '1px solid #262931',
        color: '#262931',
        fontWeight: 600,
        background: "#111318"
    };


    return (
        <>
            <section style={{ background: "#111318", overflow: "hidden", paddingBottom: '100px' }} >

                <Navbar />
                <Box className='container'>

                    <Typography variant='h1'
                        data-aos="fade-up"
                        sx={{ fontFamily: 'Hikou Outline', color: "#353B48", fontSize: '70px', pt: 16, letterSpacing: 6 }}
                    >
                        cyclelife
                    </Typography>

                    <Typography variant='h1'
                        sx={{ color: "#ffff", fontSize: '30px', mt: -3, letterSpacing: 3, mb: 10 }}
                    >
                        POPULAR CYCLE
                    </Typography>

                    <Grid container spacing={2}>
                        {
                            matchProducts?.map(cycle => <Cycle
                                key={cycle._id}
                                cycle={cycle}
                            />
                            )
                        }

                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>

                        {[...Array(pageCount).keys()].map(number => <button variant='contained'
                            className={number === page ? 'selected' : ''}
                            count={pageCount}
                            onClick={() => setPage(number)}
                            style={paginationButton}>
                            {number}
                        </button>
                        )}


                    </Box>
                </Box>
            </section>
            <Footer />
        </>
    );
};

export default Cycles;