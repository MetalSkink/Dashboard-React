import React from 'react'
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import './styles.css';
import Swal from 'sweetalert2';
import { addProduct } from '../../services/actions/product.action';

const ProductForm = () => {

  const initialState = {
    name: "",
    price: 0,
    category: "",
    imgUrl: "",
  }

  const [formData, handleInputChange, reset] = useForm(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
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