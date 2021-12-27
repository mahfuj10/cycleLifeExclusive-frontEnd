import { Box } from '@mui/system';
import React from 'react';
import '../../Style/Style.css';
// import Snowfall from 'react-snowfall'
import headerBanner from '../../../images/header-banner.jpg';
// import Navbar from '../Navigation/Navigation/Navigation';


const Header = () => {

    return (

        <Box
            sx={{ backgroundImage: `url(${headerBanner})`, height: '100vh', width: '100vw', backgroundSize: "cover", backgroundAttachment: 'fixed' }}
        >
            {/* <Navbar /> */}



            {/* <Snowfall
                // Changes the snowflake color
                color='#111318'
                style={{ position: 'absolute' }}
                // Applied to the canvas element
                // Controls the number of snowflakes that are created (default 150)
                snowflakeCount={30}
            /> */}

            <Box>
                <Box >

                    <div className="patterns" style={{ height: '100vh', paddingBottom: '10%' }}>
                        <svg width="100%" height="100%">
                            <defs>

                                <style>

                                </style>

                            </defs>

                            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>

                            <text x="50%" y="60%" textAnchor="middle"  >
                                The road outside the main city
                            </text>
                            <text x="50%" y="75%" textAnchor="middle"  >
                                with cyclelife exclusive
                            </text>
                        </svg>
                    </div>
                </Box>
            </Box>

        </Box >
    );
};

export default Header;