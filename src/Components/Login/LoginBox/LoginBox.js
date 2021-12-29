import * as React from 'react';
import Box from '@mui/material/Box';
import { FcGoogle } from 'react-icons/fc';
import { BiLogInCircle } from 'react-icons/bi';
import { IoLogoFacebook } from 'react-icons/io5';
import useAuth from '../../Hooks/useAuth';
import { Alert, Button, Paper, Typography } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navigation/Navigation/Navigation';

function LoginBox() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { handaleGoogleSign, loginUser, error, success } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // input style
    const inputStyle = {
        width: '100%',
        borderRadius: '25px',
        display: "block",
        border: '1px solid #1D2029',
        padding: "7px",
        marginBottom: '15px'
    };
    // input label
    const labelInput = {
        fontSize: '14px',
        fontWeight: 600,
        color: '#1D2029'
    }

    // form submit button
    const submitButton = {
        border: '1px solid #1D2029',
        padding: '5px 55px',
        fontWeight: 'bold',
        width: '100%',
        marginTop: '10px',
        backgroundColor: '#1D2029',
        color: 'white',
        borderRadius: '25px'
    }

    // submit register form
    const handaleSubmitForm = e => {
        e.preventDefault();
        loginUser(email, password, location, history);

    };

    // google facebook button style
    const provideButton = {
        background: '#ffff',
        border: '1px solid #1D2029',
        height: '50px',
        width: "40px",
        display: "flex",
        color: '#1092F3',
        marginRight: "40px",
        alignItems: "center",
    };


    return (
        <>
            <Navbar />

            <Box sx={{ width: '100%', height: '100vh', typography: 'body1', display: 'grid', justifyContent: 'center', alignItems: 'center', background: '#F6F9FC' }}>

                <Paper elevation={3} sx={{ width: '350px', p: 3 }}>
                    <Typography variant='h5' sx={{ fontWeight: 600, mb: 2 }}>Sign In</Typography>
                    <form onSubmit={handaleSubmitForm}>
                        <label style={labelInput}>Your Email</label>
                        <input onChange={e => setEmail(e.target.value)} style={inputStyle} type="text" required />
                        <label style={labelInput}>Your Password</label>
                        <input onChange={e => setPassword(e.target.value)} style={inputStyle} type="password" required />

                        <label style={{ fontWeight: 600, fontSize: '14px', color: "#1D2029" }}>Don't have an account? <Link to="/register">Register here</Link></label>

                        <button type='submit' style={submitButton}>Sign In <BiLogInCircle /></button>
                    </form>

                    <Typography sx={{ textAlign: 'center', fontWeight: 600, color: "#1D2029", mt: 1, mb: 1 }}>   <small>---------------------------- or ---------------------------</small></Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained"
                            onClick={() => handaleGoogleSign(location, history)}
                            style={provideButton}
                        >
                            <Typography variant='h5'>
                                <FcGoogle /></Typography>
                        </Button>
                        <Button variant="contained"
                            style={provideButton}
                        >
                            <Typography variant='h5'>
                                <IoLogoFacebook /></Typography>
                        </Button>

                    </Box>

                    {success && <Alert sx={{ mt: 5, mb: 2 }} severity="success">{success}</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}

                </Paper>

            </Box>


        </>
    );
}

export default LoginBox;