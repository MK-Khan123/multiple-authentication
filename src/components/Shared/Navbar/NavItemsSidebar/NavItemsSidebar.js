import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

const NavItemsSidebar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const openNav = Boolean(anchorElNav);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="Menu Bar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                anchorEl={anchorElNav}
                open={openNav}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' }
                }}
            >
                {/* HOME SECTION */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        HOME
                    </MenuItem>
                </NavLink>

                {/* ABOUT SECTION */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        ABOUT
                    </MenuItem>
                </NavLink>

                {/* SHOP SECTION */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        SHOP
                    </MenuItem>
                </NavLink>

                {/* PAGES SECTION */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        PAGES
                    </MenuItem>
                </NavLink>

                {/* BLOG SECTION */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        BLOG
                    </MenuItem>
                </NavLink>

                {/* CONTACTS SECTION */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        CONTACTS
                    </MenuItem>
                </NavLink>

                {/* ADMIN SECTION */}
                {/* <NavLink to='/admin' className='navLink-custom-style'>
                <MenuItem onClick={handleCloseNavMenu}>                    
                        ADMIN                    
                </MenuItem>
                </NavLink> */}
            </Menu>
        </Box>
    );
};

export default NavItemsSidebar;