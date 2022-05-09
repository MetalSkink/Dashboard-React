import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright } from "../../components/Copyright";
import { useForm } from "../../hooks/useForm";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../services/actions/auth.action";
import './login.css';
import { Paper } from "@mui/material";

const theme = createTheme();

const initialState = {
  email: "",
  password: "",
}


const Login = () => {
  const [formData, handleInputChange] = useForm(initialState);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData));

    // navigate('/products', {
    //   replace: true
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper className="paper" elevation={3}>
        <CssBaseline />
        <Box className="box"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <Avatar className="avatar" sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              autoFocus
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleInputChange}
              autoComplete="current-password"
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
              <Link href="#" variant="body2">
              Forgot password?
              </Link>
              </Grid>
              <Grid item>
              <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mb: 4 }} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
