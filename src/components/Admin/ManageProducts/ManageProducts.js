import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Paper from '@mui/material/Paper';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';
import PageNavigation from '../PageNavigation/PageNavigation';

const ProductTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: '1.3rem',
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '0.5rem',
        fontSize: '1.1rem',
    },
}));

const ProductTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ManageProducts = () => {
    document.title = 'Manage Products';

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'https://safe-reef-91132.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleDelete = (id) => {
        const url = `https://safe-reef-91132.herokuapp.com/deleteProduct/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remainingProducts = products.filter(product => product._id !== id);
                setProducts(remainingProducts);
                sweetAlert("Product removed successfully!", 'success', "Please go to Home page to see the update");
            });
    }

    //For pagination    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    //Get current Item
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

    //Get Page Number    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <section id='manage-products'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} my={10}>
                        <Box>
                            <Typography mb={3} variant="h4" gutterBottom component="div">
                                Manage Products
                            </Typography>
                            <section id='product-data'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <ProductTableCell align='center'>#</ProductTableCell>
                                                <ProductTableCell align="center">ID</ProductTableCell>
                                                <ProductTableCell>Category ID</ProductTableCell>
                                                <ProductTableCell align="center">Name</ProductTableCell>
                                                <ProductTableCell align="center">Description</ProductTableCell>
                                                <ProductTableCell align="center">Action</ProductTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                currentItems?.map((product, index) => {
                                                    const { category_id, name, description, _id } = product;
                                                    return (
                                                        <ProductTableRow key={_id}>
                                                            <ProductTableCell align='center' component="th" scope="row">
                                                                {index + 1}
                                                            </ProductTableCell>
                                                            <ProductTableCell>{_id}</ProductTableCell>
                                                            <ProductTableCell align="center">{category_id}</ProductTableCell>
                                                            <ProductTableCell align="center">
                                                                <Box
                                                                    component='div'
                                                                    sx={{
                                                                        fontWeight: '500',
                                                                        textTransform: 'capitalize'
                                                                    }}
                                                                >
                                                                    {name}
                                                                </Box>
                                                            </ProductTableCell>
                                                            <ProductTableCell align="center">
                                                                <div>Weight: {description.weight}</div>
                                                                <div>Price:{description.price}</div>
                                                            </ProductTableCell>
                                                            <ProductTableCell align="center">
                                                                <DeleteOutlineRoundedIcon
                                                                    onClick={() => handleDelete(_id)}
                                                                    sx={{ fontSize: '2rem', color: '#525252', '&:hover': { color: '#DC3545', cursor: 'pointer' } }}
                                                                />
                                                            </ProductTableCell>
                                                        </ProductTableRow>
                                                    );
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </section>

                            <PageNavigation
                                totalItems={products?.length}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                handlePageChange={handlePageChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
};

export default ManageProducts;