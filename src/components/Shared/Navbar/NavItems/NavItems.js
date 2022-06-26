import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

const NavItems = () => {

    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'end', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            {/* HOME SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Home
                </NavLink>
            </Box>

            {/* ABOUT SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    About
                </NavLink>
            </Box>

            {/* SHOP SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Shop
                </NavLink>
            </Box>

            {/* PAGES SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Pages
                </NavLink>
            </Box>

            {/* BLOG SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Blog
                </NavLink>
            </Box>

            {/* CONTACTS SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Contact
                </NavLink>
            </Box>

            {/* ADMIN SECTION */}
            <Box sx={{ my: 3, pr: 3, fontSize: '1.25rem' }}>
                <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                    Admin
                </NavLink>
            </Box>
        </Box>
    );
};

export default NavItems;