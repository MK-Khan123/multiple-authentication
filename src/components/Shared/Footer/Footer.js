import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
        color: 'whitesmoke'
    },

    '& .MuiOutlinedInput-root': {
        color: 'whitesmoke'
    },

    '& .MuiFormHelperText-root': {
        color: 'whitesmoke'
    }
});

const Footer = () => {
    return (
        <Box component='section' id="footer">
            <Box backgroundColor='#353535'>
                <Container>
                    <Grid container p={6} align='center'>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box pt={3} component='img' src={`https://i.ibb.co/1fC7X4s/footer-logo.png`} alt=""></Box>
                            <Typography pt={4} color='whitesmoke' textAlign='left' fontSize="0.8rem" variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </Typography>
                            <Typography pt={4} color='whitesmoke' textAlign='left' fontSize="0.8rem" variant="body1" gutterBottom>
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography pt={4} color='whitesmoke' fontSize="1rem" fontWeight='500' variant="h5" gutterBottom component='div'>
                                CONTACT US
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                1234, Parkstreet Avenue, NewYork
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                +123 456 78900, +009 876 54321
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                info@e-feri.com, e-feri@info.com
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                www.e-feri.com, www.infoferi.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography pt={4} color='whitesmoke' fontSize="1rem" fontWeight='500' variant="h5" gutterBottom component='div'>
                                MY ACCOUNT
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                My Account
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                Wishlist
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                Shopping Cart
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                Compare
                            </Typography>
                            <Typography pt={4} color='whitesmoke' fontSize="0.8rem" variant="body1" gutterBottom>
                                Checkout
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography pt={4} color='whitesmoke' fontSize="1rem" fontWeight='500' variant="h5" gutterBottom component='div'>
                                SIGN UP FOR NEWS LETTER
                            </Typography>

                            <Box
                                pt={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Box mr={2}>
                                    <FooterTextField label="Your mail" variant="standard" />
                                </Box>
                                <Button color='error' variant='contained'>SUBMIT</Button>
                            </Box>

                            <Typography pt={5} color='whitesmoke' fontSize="1rem" fontWeight='500' variant="h5" gutterBottom component='div'>
                                FOLLOW US ON
                            </Typography>

                            <Box pt={2}>
                                <FacebookRoundedIcon sx={{ color: '#4867AA', fontSize: '2.1875rem', marginRight: '15px' }} />
                                <TwitterIcon sx={{ color: '#179CF0', fontSize: '2.1875rem', marginRight: '15px' }} />
                                <PinterestIcon sx={{ color: '#BE0216', fontSize: '2.1875rem', marginRight: '15px' }} />
                                <LinkedInIcon sx={{ color: '#0A66C2', fontSize: '2.1875rem', marginRight: '15px' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: '#555555' }}>
                <Container>
                    <Box
                        py={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography color='whitesmoke' fontSize="0.875rem" variant="body1">
                            Copyright © 2017. All right reserved by <Box color='#de4644' component='span'>E-BUY</Box>
                        </Typography>
                        <Box>
                            <Box mr={1} component='img' src={`https://i.ibb.co/f9HVk0d/card1.png`} alt="" ></Box>
                            <Box mr={1} component='img' src={`https://i.ibb.co/5hL7JMj/card2.png`} alt="" ></Box>
                            <Box mr={1} component='img' src={`https://i.ibb.co/7bNhqZ4/card3.png`} alt="" ></Box>
                            <Box mr={1} component='img' src={`https://i.ibb.co/cFZZWmy/card4.png`} alt="" ></Box>
                            <Box mr={1} component='img' src={`https://i.ibb.co/CsRPw49/card5.png`} alt="" ></Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;