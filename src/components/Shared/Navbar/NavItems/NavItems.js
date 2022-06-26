import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

const NavItems = () => {

    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'end', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            {/* Home Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                    Home
                </NavLink>
            </Box>

            {/* About Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    About
                </NavLink>
            </Box>

            {/* Shop Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Shop
                </NavLink>
            </Box>

            {/* Pages Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Pages
                </NavLink>
            </Box>

            {/* Blog Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Blog
                </NavLink>
            </Box>

            {/* My Account Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='/my-account' style={{ textDecoration: 'none', color: 'black' }}>
                    My Account
                </NavLink>
            </Box>

            {/* Admin Section */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Admin
                </NavLink>
            </Box>
        </Box>
    );
};

export default NavItems;