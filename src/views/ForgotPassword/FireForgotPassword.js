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
        .get(`${process.env.PUBLIC_URL}/api/check_email?email=${userEmail}`)
        .then((response) => {
          if (response.status === 200) {
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            console.log(OTP);
            setOTP(OTP);
            setEmail(userEmail);

            axios
              .post(`${process.env.API_URL}/api/send_email`, {
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
