import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid } from '@mui/material';

// project import
import FireForgotPassword from './FireForgotPassword';

// assets
import Logo from 'assets/images/logo.png';
import CodeDisplay from 'component/CodeDisplay';

// ==============================|| LOGIN ||============================== //

const ForgotPassword = () => {
  const theme = useTheme();
  const code = `
  import React, { useState } from 'react';
  import { useContext } from 'react';
  
  import axios from 'axios';
  
  import { RecoveryContext } from '../../../src/layout/App';
  // material-ui
  import { useTheme } from '@mui/material/styles';
  import { toast } from 'react-toastify';
  
  import { Box, Button, Divider, TextField } from '@mui/material';
  
  //  third party
  import * as Yup from 'yup';
  import { Formik } from 'formik';
  
  // ==============================|| FIREBASE LOGIN ||============================== //
  
  const FireForgotPassword = ({ ...rest }) => {
    const theme = useTheme();
    //let faceio;
  
    const { setPage, setOTP, setEmail } = useContext(RecoveryContext);
    const [userEmail, setUserEmail] = useState('');
  
    function sendOtp() {
      if (userEmail) {
        axios
          .get("{process.env.PUBLIC_URL}/api/check_email?email={userEmail}")
          .then((response) => {
            if (response.status === 200) {
              const OTP = Math.floor(Math.random() * 9000 + 1000);
              console.log(OTP);
              setOTP(OTP);
              setEmail(userEmail);
  
              axios
                .post("{process.env.API_URL}/api/send_email", {
                  OTP,
                  recipient_email: userEmail
                })
                .then(() => setPage('otp'))
                .catch(console.log);
              const notify = () => toast('Password changed successfully, please login!', { type: 'success', position: 'top-right' });
              return notify();
            } else {
              alert('User with this email does not exist!');
              console.log(response.data.message);
            }
          })
          .catch(console.log);
      } else {
        alert('Please enter your email');
      }
    }
    //const { errors } = this.state;
  
    return (
      <>
        <Box alignItems="center" display="flex" mt={2}>
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          <h4 className="text-2xl font-bold mb-4">Forgot Password</h4>
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        </Box>
  
        <Formik
          initialValues={{
            email: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
          })}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form className="form">
              <div className="container row mx-auto p-4">
                <label htmlFor="email"> Email: </label>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  className="verification-input"
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  type="email"
                  value={userEmail}
                  variant="outlined"
                />
              </div>
  
              <Box mt={2}>
                <Button color="primary" onClick={() => sendOtp()} fullWidth size="large" type="submit" variant="contained">
                  Forgot Password
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </>
    );
  };
  
  export default FireForgotPassword;
    `;
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.black, height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={11} sm={7} md={6} lg={5}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            position: 'relative',
            '& .MuiCardContent-root': {
              flexGrow: 1,
              flexBasis: '50%',
              width: '50%'
            },
            maxWidth: '475px',
            margin: '24px auto'
          }}
        >
          <CardContent sx={{ p: theme.spacing(5, 4, 3, 4) }}>
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <RouterLink to="/">
                      <img alt="Auth method" src={Logo} />
                    </RouterLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FireForgotPassword />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={11} sm={7} md={6} lg={5}>
        <CodeDisplay code={code} />
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
