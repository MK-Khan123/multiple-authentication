import React, { useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Registration = ({ registerUsingEmail }) => {

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

    //This useEffect is used to clear input fields after successful Registration form submission
    useEffect(() => {
        if (isRegistrationSubmitSuccessful) {
            resetRegistration();
        }
    }, [isRegistrationSubmitSuccessful, resetRegistration]);

    const registration = data => {
        const { registrationName, registrationPhone, registrationEmail, registrationPassword } = data;

        const userData = {
            name: registrationName,
            phone: registrationPhone,
            email: registrationEmail,
            password: registrationPassword,
            role: 'user'
        };

        const url = `https://safe-reef-91132.herokuapp.com/registeredUser`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);                
            });

        return registerUsingEmail(registrationName, registrationEmail, registrationPassword);
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
                    label="Phone"
                    type="number"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                        shrink: true
                    }}
                    {...registerSignUp("registrationPhone", { required: "Phone is required" })}
                    error={!!registrationError.registrationPhone}
                    helperText={registrationError?.registrationPhone ? registrationError.registrationPhone.message : null}
                />
                <TextField sx={{ mb: 2 }}
                    id="outlined-basic3"
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
    );
};

export default Registration;