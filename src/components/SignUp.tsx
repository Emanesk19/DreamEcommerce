import { LoginOutlined } from '@mui/icons-material';
import { Box, Grid, Typography, Stack, TextField, Button, useMediaQuery, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import me from "../img/WhiteDress.jpg";
import '../styles/SignUp.css';
import Login from './Login';
const SignUp = () => {
    const [currentPage, setCurrentPage] = useState('signUp');

    const handleLogin = () => {
        setCurrentPage('login');
    }
    const isDesktop = useMediaQuery('(min-width: 1300px)');
    const isTablet = useMediaQuery('(min-width: 700px) and (max-width: 1300px)');

    const textFieldWidth = isDesktop ? '25ch' : (isTablet ? '35ch' : '18ch');
    return (
        <div>
            {
                currentPage === "signUp" ? (
                    <Box className="containerStyle">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
                                <Box className="content-container">
                                    <Box className="boxStyle">
                                        <img src={me} alt=""
                                            style={{
                                                minWidth: '100%',
                                                maxHeight: '40vw',
                                                objectFit: 'cover',

                                            }} className='img' />
                                    </Box>
                                    {/* Text boxes */}


                                    <Box className="stackStyle">
                                        <Typography variant="h4" component="h4" gutterBottom >
                                            <Box sx={{ textAlign: 'center' }} className='heading'>
                                                <b style={{ fontSize: '30px' }}><i>Welcome </i> </b>
                                            </Box>
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={10} md={12} lg={12} xl={8}>
                                                <Box
                                                    component="form"
                                                    method='POST'
                                                    sx={{
                                                        '& .MuiTextField-root': { m: 3, width: textFieldWidth },
                                                    }}
                                                    className="formStyle"
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <Stack direction="row" spacing={2}>
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="First Name"
                                                            type="text"
                                                            sx={{
                                                                borderRadius: '20px',
                                                                '& .MuiOutlinedInput-root': {
                                                                    borderRadius: '20px',
                                                                },
                                                            }}
                                                        />
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="Last Name"
                                                            type="email"
                                                            sx={{
                                                                borderRadius: '20px',
                                                                '& .MuiOutlinedInput-root': {
                                                                    borderRadius: '20px',
                                                                },
                                                            }}
                                                        />
                                                    </Stack>
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        label="Email"
                                                        type="email"
                                                        sx={{
                                                            borderRadius: '20px',
                                                            '& .MuiOutlinedInput-root': {
                                                                borderRadius: '20px',
                                                                width: isDesktop ? '54ch' : (isTablet ? '72ch' : '40ch')
                                                            },
                                                        }}
                                                    />
                                                    <Stack direction="row" spacing={2}>
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="Password"
                                                            type="password"
                                                            sx={{
                                                                borderRadius: '20px',
                                                                '& .MuiOutlinedInput-root': {
                                                                    borderRadius: '20px',
                                                                },
                                                            }}

                                                        />
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            label="Confimrm Password"
                                                            type="password"
                                                            sx={{
                                                                borderRadius: '20px',
                                                                '& .MuiOutlinedInput-root': {
                                                                    borderRadius: '20px',
                                                                },
                                                            }}
                                                        />

                                                    </Stack>

                                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                        <RadioGroup row aria-label="account-type" name="account-type" >
                                                            <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
                                                            <FormControlLabel value="seller" control={<Radio />} label="Seller" />
                                                        </RadioGroup>
                                                        <Typography variant="caption" display="block" gutterBottom >
                                                            <a href="#" className="caption" onClick={handleLogin} style={{ alignSelf: 'center', fontSize: '14px' }}>
                                                                Don't Have an Account? Sign Up
                                                            </a>
                                                        </Typography>
                                                    </Box>

                                                    <Button className='buttonLogin' variant="contained"
                                                        sx={{
                                                            // margin: '10px 0 0 0',
                                                            bgcolor: '#da3737',
                                                            border: '1px solid #da3737',
                                                            alignSelf: 'center',
                                                            '&:hover': {
                                                                bgcolor: 'white',
                                                                color: '#da3737',
                                                                border: '1px solid #da3737',
                                                            },
                                                        }}
                                                        type='submit'
                                                        endIcon={<LoginOutlined />} >
                                                        Sign Up
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                ) : (
                    <Login />
                )
            }

        </div>

    );
};

export default SignUp;