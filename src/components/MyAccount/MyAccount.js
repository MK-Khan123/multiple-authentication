import { Box, Container, Grid, Typography } from '@mui/material';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import Sponsors from '../Sponsors/Sponsors';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import './MyAccount.css';

const MyAccount = () => {
    document.title = 'My Account';

    const bannerImage = 'https://i.ibb.co/XJ2BrGf/about-bg.jpg';

    //Using Firebase for login, registration, reset password and authentication
    const {
        signInUsingGoogle,
        signInUsingEmail,
        registerUsingEmail,
        passwordReset
    } = useAuth();

    return (
        <section id='my-account'>
            <header>
                <Navbar />
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

                <Container>
                    <section id='user-info'>
                        <Grid container mt={4} spacing={3}>
                            <Login
                                signInUsingEmail={signInUsingEmail}
                                passwordReset={passwordReset}
                            />
                            <Registration
                                registerUsingEmail={registerUsingEmail}
                            />
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
                    </section>

                    <section id='sponsors'>
                        <Sponsors />
                    </section>
                </Container>

            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default MyAccount;