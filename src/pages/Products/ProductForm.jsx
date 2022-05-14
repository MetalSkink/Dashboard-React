import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct, getProduct } from '../../services/actions/product.action';
import Swal from 'sweetalert2';
import './styles.css';

const ProductForm = () => {

  
  const initialState = {
    name: "",
    price: 0,
    category: "",
    imgUrl: "",
  }
  //Validaciones
  const [nameValid, setNameValid] = useState(true);
  const [priceValid, setPriceValid] = useState(true);
  const [categoryValid, setCategoryValid] = useState(true);
  //formulario
  const [formData, handleInputChange, reset] = useForm(initialState);
  const {product} = useSelector(state => state.products);
  const {productId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(productId){
      console.log("productId", productId);
      dispatch(getProduct(productId));
      console.log("product", product);
    }
  }, [productId,product, dispatch])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim().length < 2) {
      return setNameValid(false);
    }else setNameValid(true);

    if (formData.price <= 0) {
      return setPriceValid(false);
    } else setPriceValid(true);
    
    if (formData.category.trim().length < 2) {
      return setCategoryValid(false);
    } else setCategoryValid(true);

    dispatch(addProduct(formData));
    reset();
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: true,
      timer: 1500
    })
  }
  
  return (
    <>
    <Typography variant='h4' component="h2">Agregar un producto</Typography>
    <Divider style={{ margin: '20px 0' }} />
    <Box
        component="form"
        noValidate
        autoComplete="off">
    <div>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
      <TextField
          error={!nameValid}
          id="outlined-basic" 
          label="Nombre" 
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          fullWidth
          />
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField
        id="outlined-number"
        error={!priceValid}
        label="Precio"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}/>
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField 
          id="outlined-basic" 
          error={!categoryValid}
          label="Categoría" 
          variant="outlined"
          value={formData.category}
          name="category"
          onChange={handleInputChange}
          fullWidth/>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField 
          id="outlined-basic" 
          label="Url de la imagen" 
          variant="outlined"
          value={formData.imgUrl}
          name="imgUrl"
          onChange={handleInputChange}
          margin="dense"
          fullWidth/>
      </Grid>
    </Grid>
    </div>
    <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleSubmit}>
      Agregar
    </Button>
  </Box>
  </>
  )
}

export default ProductForm