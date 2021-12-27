import * as React from 'react';
import { Alert, Box, Modal, Fade, Grid, Typography, Backdrop } from '@mui/material';
import LoginPopup from '../Login/LoginPopup';
import useAuth from '../../Hooks/useAuth';


const loginModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #fffff',
    boxShadow: 24,
};

function LoginModal({ openModal, setOpenModal }) {



    // const [open, setOpen] = React.useState(false);
    const { error, success } = useAuth();

    const handleClose = () => setOpenModal(false);

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={loginModal}>
                        <Grid container spacing={0}>
                            <Grid item xs={6}
                                sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1569448097598-30d0df0df0db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)`, backgroundSize: 'cover' }}

                            >

                                <Typography variant='h1'
                                    s sx={{ fontFamily: 'Hikou Outline', color: "#fff", position: '', fontSize: '70px', pt: '15%', letterSpacing: 6 }}
                                >
                                    welcome <br /> to<br />
                                    cyclelife
                                </Typography>

                                <Box>
                                    {success && <Alert sx={{ mt: 5, mb: 2 }} severity="success">{success}</Alert>}
                                    {error && <Alert severity="error">{error}</Alert>}

                                </Box>

                            </Grid>
                            <Grid item xs={6}>
                                <LoginPopup />
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
export default LoginModal;