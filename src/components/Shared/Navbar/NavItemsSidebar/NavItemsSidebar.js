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
                color="secondary"
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
                {/* Home Section */}
                <NavLink to='/home' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        HOME
                    </MenuItem>
                </NavLink>

                {/* About Section */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        ABOUT
                    </MenuItem>
                </NavLink>

                {/* Shop Section */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        SHOP
                    </MenuItem>
                </NavLink>

                {/* Pages Section */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        PAGES
                    </MenuItem>
                </NavLink>

                {/* Blog Section */}
                <NavLink to='' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        BLOG
                    </MenuItem>
                </NavLink>

                {/* My Account Section */}
                <NavLink to='/my-account' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        MY ACCOUNT
                    </MenuItem>
                </NavLink>

                {/* Admin Section */}
                <NavLink to='/admin' className='navLink-custom-style'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        ADMIN
                    </MenuItem>
                </NavLink>
            </Menu>
        </Box>
    );
};

export default NavItemsSidebar;