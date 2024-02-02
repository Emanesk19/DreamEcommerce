import React, { useState } from 'react';
import '../styles/LoginStyle.css';
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import me from '../img/WhiteDress.jpg';
import { LoginOutlined } from '@mui/icons-material';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { updateFormField, setFieldError } from '../redux/action';
import { FormState } from '../redux/reducers'; // Import the FormState interface

interface LoginProps {
  email: string;
  password: string;
  errors: Record<string, string>;
  updateFormField: (field: string, value: string) => void;
  setFieldError: (field: string, error: string) => void;
}
const Login = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleSignUp = () => {
    setCurrentPage('signUp');
  };

  

  return (
    <div>
      {currentPage === 'login' ? (
        <Box className="containerStyle">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
              <Box className="containerStyle2">
                <Box className="boxStyle">
                  <img
                    src={me}
                    alt=""
                    style={{
                      minWidth: '100%',
                      maxHeight: '37vw',
                      objectFit: 'cover',
                      // borderRadius: '30px',
                    }}
                    className="img"
                  />
                </Box>
                {/* Text boxes */}
                <Box className="stackStyle">
                  <Typography variant="h4" component="h4" gutterBottom>
                    <Box sx={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
                      <b style={{ fontSize: '20px' }}>
                        <i>Welcome Back</i>{' '}
                      </b>
                    </Box>
                  </Typography>

                  <Box
                    component="form"
                    method="POST"
                    sx={{
                      '& .MuiTextField-root': { m: 2, width: '100%' },
                    }}
                    className="formStyle"
                    noValidate
                    autoComplete="off"
                  >
                    <Stack>
                      <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        type="email"
                        sx={{
                          borderRadius: '20px',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '20px',
                          },
                        }}
                      />
                      <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{
                          borderRadius: '20px',
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '20px',
                          },
                        }}
                      />
                    </Stack>
                    <Typography variant="caption" display="block" gutterBottom>
                      <Box sx={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
                        <a href="#" className="caption" onClick={handleSignUp} style={{ alignSelf: 'center', fontSize: '14px' }}>
                          Don't Have an Account? Sign Up
                        </a>
                      </Box>
                    </Typography>
                    <Button
                      className="buttonLogin"
                      variant="contained"
                      sx={{
                        margin: '10px 0 0 0',
                        bgcolor: '#da3737',
                        border: '1px solid #da3737',
                        alignSelf: 'center',
                        '&:hover': {
                          bgcolor: 'white',
                          color: '#da3737',
                          border: '1px solid #da3737',
                        },
                      }}
                      endIcon={<LoginOutlined />}
                      type='submit'
                    >
                      Login
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <SignUp />
      )}
    </div>
  );
};

const mapStateToProps = (state: FormState) => ({
  email: state.email,
  password: state.password,
  errors: state.errors,
});

const mapDispatchToProps = {
  updateFormField,
  setFieldError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);