import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import Sponsors from '../Sponsors/Sponsors';
import './MyAccount.css';

const MyAccount = () => {
    document.title = 'My Account';

    const bannerImage = 'https://i.ibb.co/XJ2BrGf/about-bg.jpg';

    //To handle Password Reset Dialog
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleResetEmail = (event) => {
        setEmail(event.target.value);
    };

    //Using Firebase for login, registration, reset password and authentication
    const {
        signInUsingGoogle,
        signInUsingEmail,
        registerUsingEmail,
        passwordReset
    } = useAuth();

    //For handling Login
    const {
        register: registerLogin,
        formState: {
            errors: loginError,
            isSubmitSuccessful: isLoginSubmitSuccessful
        },
        handleSubmit: handleSubmitLogin,
        reset: resetLogin
    } = useForm();

    //For handling Registration (Sign up)
    const {
        register: registerSignUp,
        formState: {
            errors: registrationError,
            isSubmitSuccessful: isRegistrationSubmitSuccessful
        },
        handleSubmit: handleSubmitRegistration,
        watch,
        reset: resetRegistration
    } = useForm();

    //This useEffect is used to clear input fields after successful Login form and Registration form submission
    useEffect(() => {
        if (isLoginSubmitSuccessful) {
            resetLogin();
        }
        if (isRegistrationSubmitSuccessful) {
            resetRegistration();
        }
    }, [
        isLoginSubmitSuccessful,
        isRegistrationSubmitSuccessful,
        resetLogin,
        resetRegistration
    ]);

    const login = data => {
        const { loginEmail, loginPassword } = data;
        return signInUsingEmail(loginEmail, loginPassword);
    };

    const registration = data => {
        const { registrationName, registrationEmail, registrationPassword } = data;
        return registerUsingEmail(registrationName, registrationEmail, registrationPassword);
    };

    return (
        <section id='my-account'>
            <header>
                <Container>
                    <Navbar />
                </Container>
            </header>

            <main>
                <Box sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '26rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box
                        component='h5'
                        sx={{
                            fontSize: '4rem',
                            color: 'white',
                            fontWeight: '500',
                            textAlign: 'center'
                        }}
                    >
                        MY ACCOUNT
                    </Box>
                </Box>

                <section id='user-info'>
                    <Container>
                        <Grid container mt={4} spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    component='h5'
                                    sx={{
                                        fontSize: '1.25rem',
                                        fontWeight: '500',
                                        marginTop: 0,
                                        marginBottom: '1.25rem'
                                    }}
                                >
                                    Login Your Account
                                </Typography>
                                <form
                                    onSubmit={handleSubmitLogin(login)}
                                    style={{
                                        border: '2px solid #DEE2E6',
                                        borderRadius: '8px',
                                        padding: '35px 25px'
                                    }}
                                >
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-basic"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        size="small"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerLogin("loginEmail", { required: "Email is required" })}
                                        error={!!loginError.loginEmail}
                                        helperText={loginError?.loginEmail ? loginError.loginEmail.message : null}
                                    />
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-password-input"
                                        type="password"
                                        label="Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerLogin("loginPassword", { required: "Password is required" })}
                                        error={!!loginError.loginPassword}
                                        helperText={loginError?.loginPassword ? loginError.loginPassword.message : null}
                                    // autoComplete="current-password"
                                    />

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <FormGroup sx={{ mb: 2 }}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                                        </FormGroup>

                                        <Box mb={2}>
                                            <Typography sx={{ cursor: 'pointer', color: 'dodgerblue' }} onClick={handleClickOpen} variant="body2" display="block" gutterBottom>
                                                Forgot your password?
                                            </Typography>
                                            <Dialog open={open} onClose={handleClose}>
                                                <DialogTitle>Reset Password</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        To reset your password, please enter your email address here. We
                                                        will send updates occasionally.
                                                    </DialogContentText>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="name"
                                                        label="Email Address"
                                                        type="email"
                                                        fullWidth
                                                        variant="standard"
                                                        onChange={(event) => handleResetEmail(event)}
                                                    />
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                    <Button
                                                        onClick={() => {
                                                            passwordReset(email);
                                                            handleClose();
                                                        }}
                                                    >
                                                        Send
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Box>
                                    </Box>

                                    <Button
                                        size='large'
                                        type="submit"
                                        color='error'
                                        variant='contained'
                                    >
                                        Login
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    component='h5'
                                    sx={{
                                        fontSize: '1.25rem',
                                        fontWeight: '500',
                                        marginTop: 0,
                                        marginBottom: '1.25rem'
                                    }}
                                >
                                    Register Now <Typography display='inline' variant="body2" gutterBottom>(If Don't Have Any Account)</Typography>
                                </Typography>
                                <form
                                    onSubmit={handleSubmitRegistration(registration)}
                                    style={{
                                        border: '2px solid #DEE2E6',
                                        borderRadius: '8px',
                                        padding: '35px 25px'
                                    }}
                                >
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-basic1"
                                        label="Name"
                                        type="text"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("registrationName", { required: "Name is required" })}
                                        error={!!registrationError.registrationName}
                                        helperText={registrationError?.registrationName ? registrationError.registrationName.message : null}
                                    />
                                    <TextField sx={{ mb: 2 }}
                                        id="outlined-basic2"
                                        label="Email"
                                        type="email"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("registrationEmail", { required: "Email is required" })}
                                        error={!!registrationError.registrationEmail}
                                        helperText={registrationError?.registrationEmail ? registrationError.registrationEmail.message : null}
                                    />
                                    <TextField sx={{ mb: 3 }}
                                        id="outlined-password-input1"
                                        type="password"
                                        label="Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("registrationPassword", { required: "Password is required" })}
                                        error={!!registrationError.registrationPassword}
                                        helperText={registrationError?.registrationPassword ? registrationError.registrationPassword.message : null}
                                    // autoComplete="current-password"
                                    />
                                    <TextField
                                        id="outlined-password-input2"
                                        type="password"
                                        label="Confirm Password"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        {...registerSignUp("confirmPassword", {
                                            validate: val => {
                                                if (watch('registrationPassword') !== val) {
                                                    return "Password and Confirm Password do no match";
                                                }
                                            }
                                        })}
                                        error={!!registrationError.confirmPassword}
                                        helperText={registrationError?.confirmPassword ? registrationError.confirmPassword.message : null}
                                    // autoComplete="current-password"
                                    />

                                    <FormGroup sx={{ mb: 2, mt: 1 }}>
                                        <FormControlLabel control={<Checkbox />} label="I Accept All The Terms and Conditions, Including Privacy Policy" />
                                    </FormGroup>

                                    <Button
                                        size='large'
                                        type="submit"
                                        color='error'
                                        variant='contained'
                                    >
                                        Register
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ textAlign: 'center' }} mt={4}>
                                    <Typography
                                        sx={{ fontWeight: '500' }}
                                        variant="h5"
                                        gutterBottom
                                        component="div"
                                    >
                                        OR SIGN IN USING
                                    </Typography>
                                    <Box mb={4} onClick={signInUsingGoogle}>
                                        <img className="google-icon" src={`https://i.ibb.co/2PGfmN6/google.png`} alt="" />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Sponsors />
                    </Container>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default MyAccount;