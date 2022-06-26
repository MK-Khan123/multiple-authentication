import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './ProductItem.css';

const ProductItem = ({ product }) => {

    const { name, description } = product;

    return (
        <Grid item sm={6} md={4} lg={3} className="main-menu-card-body">
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea>
                    <Box sx={{ overflow: 'hidden' }}>
                        <CardMedia
                            sx={{
                                height: '15rem',
                                maxWidth: '25rem',
                                transition: 'all 800ms',
                                '&:hover': {
                                    transform: 'scale(1.2)'
                                }
                            }}
                            component="img"
                            image={description?.image}
                            alt=""
                        />
                    </Box>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <Rating name="no-value" value={null} />
                            </div>
                            <div>
                                <FavoriteIcon sx={{ color: 'lightgray', '&:hover': { color: 'red' } }} />
                            </div>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            <Link underline="none" className='main-menu-card-title' href='#'>
                                {name}
                            </Link>
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {description.weight}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button
                            sx={{
                                backgroundColor: '#642F21',
                                color: '#F7BE27',
                                fontWeight: '500',
                                '&:hover': {
                                    backgroundColor: '#56423D'
                                }
                            }}
                        >
                            ৳ {description?.price}
                        </Button>
                        <Box className="main-menu-cart-button">
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: '#FFCA2C',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: '#FFCA2C'
                                    }
                                }}
                            >
                                <ShoppingBagOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} />
                                Add to cart
                            </Button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItem;