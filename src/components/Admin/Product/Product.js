import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';

const Product = () => {

    document.title = 'Product Upload';

    //For handling Product
    const {
        register: registerProduct,
        formState: {
            errors: productError,
            isSubmitSuccessful: isProductSubmitSuccessful
        },
        handleSubmit: handleSubmitProduct,
        reset: resetProduct
    } = useForm();

    //This useEffect is used to clear input fields after successful Product form submission
    useEffect(() => {
        if (isProductSubmitSuccessful) {
            resetProduct();
        }
    }, [isProductSubmitSuccessful, resetProduct]);

    const [imageURL, setImageURL] = useState();
    const [isDisabled, setIsDisabled] = useState(true);

    const handleImageUpload = event => {
        setIsDisabled(true);
        const imageData = new FormData();
        imageData.set('key', '6a505607e7aa21f071b1c0ec3e817fdf');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                setIsDisabled(false);
            })
            .catch(error => console.log(error));
    };

    const product = data => {
        const { category_id, productName, productWeight, productPrice } = data;

        const productData = {
            category_id,
            name: productName,
            description: {
                weight: productWeight,
                price: productPrice,
                image: imageURL
            }
        };

        const url = `https://safe-reef-91132.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('Product added successfully!', 'success', 'Please go to homepage to see the update');
            });
    };

    return (
        <section id='product'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} my={10}>
                        <Box>
                            <Typography mb={3} variant="h4" gutterBottom component="div">
                                Product Upload
                            </Typography>
                            <Typography mb={3} variant="body1" gutterBottom>
                                You can add new products by providing necessary information. If you're adding a product under new category, then make sure you've added that category on `Category Module`. Unique IDs will be generated by MongoDB once you upload the data.
                            </Typography>

                            <form onSubmit={handleSubmitProduct(product)}>
                                <TextField sx={{ mb: 2 }}
                                    label="Category ID"
                                    type="text"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerProduct("category_id", { required: "This field is required" })}
                                    error={!!productError.category_id}
                                    helperText={productError?.category_id ? productError.category_id.message : null}
                                />
                                <TextField sx={{ mb: 2 }}
                                    label="Product Name"
                                    type="text"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerProduct("productName", { required: "This field is required" })}
                                    error={!!productError.productName}
                                    helperText={productError?.productName ? productError.productName.message : null}
                                />
                                <TextField sx={{ mb: 2 }}
                                    label="Weight"
                                    type="text"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerProduct("productWeight", { required: "This field is required" })}
                                    error={!!productError.productWeight}
                                    helperText={productError?.productWeight ? productError.productWeight.message : null}
                                />
                                <TextField sx={{ mb: 2 }}
                                    label="Price"
                                    type="text"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerProduct("productPrice", { required: "This field is required" })}
                                    error={!!productError.productPrice}
                                    helperText={productError?.productPrice ? productError.productPrice.message : null}
                                />
                                <TextField sx={{ mb: 2 }}
                                    label="Image"
                                    type="file"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerProduct("productImage", {
                                        required: "This field is required",
                                        onChange: (event) => { handleImageUpload(event) }
                                    })}
                                    error={!!productError.productImage}
                                    helperText={productError?.productImage ? productError.productImage.message : null}
                                />
                                <Button
                                    size='large'
                                    type="submit"
                                    color='success'
                                    variant='contained'
                                    disabled={isDisabled}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Product;