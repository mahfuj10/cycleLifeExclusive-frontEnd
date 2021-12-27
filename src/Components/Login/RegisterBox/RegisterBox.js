import { Box } from '@mui/lab/node_modules/@mui/system';
import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io5';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../../Home/Navigation/Navigation/Navigation';
import useAuth from '../../Hooks/useAuth';

const RegisterBox = () => {

    const { registerUser, handaleGoogleSign } = useAuth();
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();
    const location = useLocation();





    const inputStyle = {
        width: '100%',
        borderRadius: '25px',
        display: "block",
        border: '1px solid #1D2029',
        padding: "7px",
        marginBottom: '15px'
    }
    const labelInput = {
        fontSize: '14px',
        fontWeight: 600,
        color: '#1D2029'
    }

    const submitButton = {
        border: '1px solid #1D2029',
        padding: '5px 55px',
        fontWeight: 'bold',
        width: '100%',
        marginTop: '10px',
        backgroundColor: '#1D2029',
        color: 'white',
        borderRadius: '25px'
    };



    const handaleRegisterUser = e => {
        e.preventDefault();
        if (password !== rePassword) {
            alert("Password doesn't match try again.");
            return;
        };
        registerUser(email, password, name, history, location);

    };

    const provideButton = {
        background: '#ffff',
        border: '1px solid #1D2029',
        height: '50px',
        width: "40px",
        display: "flex",
        color: '#1092F3',
        marginRight: "40px",
        alignItems: "center",
    }



    return (
        <>
            <Navbar />

            <Box sx={{ width: '100%', height: '100vh', typography: 'body1', display: 'grid', justifyContent: 'center', alignItems: 'center', background: '#F6F9FC' }}>

                <Paper elevation={3} sx={{ width: '420px', p: 3 }}>
                    <Typography variant='h5' sx={{ fontWeight: 600, mb: 2 }}>Register</Typography>

                    <form onSubmit={handaleRegisterUser}>

                        <label style={labelInput}>Name</label>
                        <input onChange={e => setName(e.target.value)} style={inputStyle} type="text" required />

                        <label style={labelInput}>Email</label>
                        <input onChange={e => setEmail(e.target.value)} style={inputStyle} type="email" required />

                        <label style={labelInput}> Password</label>
                        <input onChange={e => setPassword(e.target.value)} style={inputStyle} type="password" required />

                        <label style={labelInput}> Retype Password</label>
                        <input onChange={e => setRePassword(e.target.value)} style={inputStyle} type="password" required />


                        <button type='submit' style={submitButton}>Register <BiLogInCircle /></button>

                    </form>

                    <Typography sx={{ textAlign: 'center', fontWeight: 600, color: "#1D2029", mt: 1, mb: 1 }}>   <small>---------------------------- or ---------------------------</small></Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained"
                            onClick={handaleGoogleSign}
                            style={provideButton}
                        >
                            <Typography variant='h5'>
                                <FcGoogle /></Typography>
                        </Button>
                        <Button variant="contained"
                            // onClick={handaleGoogleSign}
                            style={provideButton}
                        >
                            <Typography variant='h5'>
                                <IoLogoFacebook /></Typography>
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default RegisterBox;