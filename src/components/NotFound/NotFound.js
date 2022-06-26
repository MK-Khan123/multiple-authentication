import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '80vh',
                    margin: 'auto'
                }}
            >
                <img className='image-responsive' src="https://i.ibb.co/vkPbvHd/not-found-page.jpg" alt="Error 404" />
                <NavLink to='/my-account' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" color='secondary'>Go To My Account</Button>
                </NavLink>
            </Box>
        </Container>
    );
};

export default NotFound;