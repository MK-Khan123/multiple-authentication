import { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import ProductItem from './ProductItem/ProductItem';

const Home = () => {
    document.title = 'Home';

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <section id='product-grid'>
                    <Container>
                        {
                            isLoading ? (
                                <Box
                                    p={6}
                                    sx={{ height: '30rem' }}
                                >
                                    <LoadingSpinner />
                                </Box>
                            ) : (
                                <Grid container spacing={3} py={8}>
                                    {
                                        products?.map(product =>
                                            <ProductItem
                                                key={product._id}
                                                product={product}
                                            />)
                                    }

                                </Grid>
                            )
                        }
                    </Container>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;