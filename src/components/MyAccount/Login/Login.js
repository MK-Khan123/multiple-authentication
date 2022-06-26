import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Login = ({ signInUsingEmail, passwordReset }) => {

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

    //This useEffect is used to clear input fields after successful Login form submission
    useEffect(() => {
        if (isLoginSubmitSuccessful) {
            resetLogin();
        }
    }, [isLoginSubmitSuccessful, resetLogin]);

    const login = data => {
        const { loginEmail, loginPassword } = data;
        return signInUsingEmail(loginEmail, loginPassword);
    };

    return (
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
                    autoComplete="current-password"
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
                        <Typography
                            sx={{
                                cursor: 'pointer',
                                color: 'dodgerblue'
                            }}
                            onClick={handleClickOpen}
                            variant="body2"
                            display="block"
                            gutterBottom
                        >
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
    );
};

export default Login;