import React, { useState, useContext } from 'react';
import { RecoveryContext } from '../../layout/App';
import axios from 'axios';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// ==============================|| FIREBASE LOGIN ||============================== //

const FirePasswordReset = () => {
  const theme = useTheme();
  const [password, setPassword] = useState('');
  const { setPage, email } = useContext(RecoveryContext);
  function changePassword() {
    if (password) {
      try {
        axios
          .put(`${process.env.PUBLIC_URL}/api/update-password`, {
            email: email,
            newPassword: password
          })
          .then(() => setPage('login'));
        return alert('Password changed successfully, please login!');
      } catch (error) {
        console.log(error);
      }
    }
    return alert('Please enter your new Password');
  }

  //const { errors } = this.state;

  return (
    <>
      <Box alignItems="center" display="flex" mt={2}>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        <Typography color="textSecondary" variant="h5" sx={{ m: theme.spacing(2) }}>
          OR
        </Typography>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Box>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <>
            <h2> Change Password </h2>
            <form className="form">
              <label htmlFor="email"> New Password: </label>
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                className="verification-input"
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                placeholder="••••••••"
                name="password"
                onBlur={(e) => {
                  setPassword(e.target.value);
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                value={password}
                required=""
                variant="outlined"
              />
              <Box mt={2}>
                <Button color="primary" onClick={() => changePassword()} fullWidth size="large" type="submit" variant="contained">
                  Reset Password
                </Button>
              </Box>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FirePasswordReset;
