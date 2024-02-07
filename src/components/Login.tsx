import React, { useState } from 'react';
import '../styles/LoginStyle.css';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import me from '../img/WhiteDress.jpg';
import { LoginOutlined } from '@mui/icons-material';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { updateFormField, setFieldError, loginRequest } from '../reduxSaga/loginAction';
import { useNavigate } from 'react-router-dom';

const Login = ({ form, updateFormField, loginRequest, setFieldError }:any) => {
  const [currentPage, setCurrentPage] = useState('login');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Form validation
    if (!form?.email) {
      setError('Email is required');
      setFieldError('email', 'Email is required');
      return;
    }

    if (!form?.password) {
      setError('Password is required');
      setFieldError('password', 'Password is required');
      return;
    }

    // Dispatch login request
    loginRequest(form?.email, form?.password, rememberMe);

    
  };

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
                      maxHeight: '40vw',
                      objectFit: 'cover',
                      // borderRadius: '30px',
                    }}
                    className="img"
                  />
                </Box>
                {/* Text boxes */}
                <Box className="stackStyle">
                  <Typography variant="h4" component="h4" gutterBottom>
                    <Box
                      sx={{
                        textAlign: 'center',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%',
                      }}
                    >
                      <b style={{ fontSize: '20px' }}>
                        <i>Welcome Back</i>{' '}
                      </b>
                    </Box>
                  </Typography>

                  <Box
                    onSubmit={handleSubmit}
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
                        value={form?.email}
                        onChange={(e) => {
                          console.log('Login - Email Change:', e.target.value);
                          updateFormField('email', e.target.value);
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
                        value={form?.password}
                        onChange={(e) => {
                          console.log('Login - Password Change:', e.target.value);
                          updateFormField('password', e.target.value);
                        }}
                      />
                    </Stack>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                      style={{ alignSelf: 'center', fontSize: '5px' }}
                      onChange={(e) => setRememberMe((e.target as HTMLInputElement).checked)}
                      />
                    <Typography variant="caption" display="block" gutterBottom>
                      <Box
                        sx={{
                          textAlign: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '100%',
                        }}
                      >
                        <a
                          href="/###"
                          className="caption"
                          onClick={handleSignUp}
                          style={{ alignSelf: 'center', fontSize: '14px' }}
                        >
                          Don't Have an Account? Sign Up
                        </a>
                      </Box>
                    </Typography>
                    {error && (<Typography variant="caption" display="block" gutterBottom sx={{color:'red'}}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '100%',

                        }}
                      >
                      </Box>
                      {error}

                    </Typography>)}
                    <Button
                      className="buttonLogin"
                      variant="contained"
                      sx={{
                        margin: '10px 0 0',
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
                      onClick={handleSubmit}
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  ) : (
    // <SignUp setCurrentPage={setCurrentPage} />
    <SignUp/>
  )}
</div>
  )
}

const mapStateToProps = (state:any) => {
  return {
    form: state.form, // Assuming `form` is the slice of state containing the form data
  };
};

const ConnectedLogin = connect(mapStateToProps, {
  updateFormField,
  setFieldError,
  loginRequest,
})(Login);
export default ConnectedLogin