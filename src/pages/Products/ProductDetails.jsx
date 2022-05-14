import { Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../services/actions/product.action';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './styles.css';

const ProductDetails = () => {
  const {product, isLoading} = useSelector(state => state.products);
  const navigate = useNavigate();
  const {productId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch,productId]);
  
  return (
    <>
      <Typography variant='h3' component="h2">Detalles del producto</Typography>
      <Divider style={{ margin: '20px 0' }} />
      <Grid container justifyContent="center">
    {
        isLoading ? (
          <CircularProgress/>
          ) : (
          <>
          <Grid item xs={12} md={6}>
            <img className='media' src={product.imgUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                 alt={product.name} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' component="h3">{product.name}</Typography>
            <Typography gutterBottom variant='h4' color="textSecondary" component="h2">{product.category}</Typography>
            <Divider/>
            <Typography gutterBottom variant='h5' component="h2">Precio: $ {product.price}</Typography>
            <Button sx={{ mt: 2 }} variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>Regresar</Button>
          </Grid>
          </>
        )}
      </Grid>
    </>
  )
}

export default ProductDetails