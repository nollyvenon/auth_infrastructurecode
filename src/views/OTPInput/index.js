import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid } from '@mui/material';

// project import
import FireOTPInput from './FireOTPInput';

// assets
import Logo from 'assets/images/logo.png';
import CodeDisplay from 'component/CodeDisplay';

// ==============================|| LOGIN ||============================== //

const OTPInput = () => {
  const theme = useTheme();
  const code = `import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { RecoveryContext } from '../../layout/App';
import axios from 'axios';
// material-ui
import { Box, Button, Divider, TextField } from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// ==============================|| FIREBASE LOGIN ||============================== //

const FireOTPInput = ({}) => {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [OTPinput, setOTPinput] = useState('');
  const [disable, setDisable] = useState(true);
  const [timerCount, setTimer] = useState(60);

  //function to verify OTP
  function verifyOTP() {
    if (parseInt(OTPinput) === otp) {
      setPage('reset');
    } else {
      alert('The code you have entered is not correct, try again or re-send the link');
    }
  }

  //function to resend OTP
  function resendOTP() {
    if (disable) return;
    axios
      .post("{process.env.API_URL}/send_email", {
        OTP: otp,
        recipient_email: email
      })
      .then(() => setDisable(true))
      .then(() => alert('A new OTP has succesfully been sent to your email.'))
      .then(() => setTimer(60))
      .catch(console.log);
  }
  //timer function
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        return lastTimerCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [disable]);

  //const { errors } = this.state;

  return (
    <>
      <Box alignItems="center" display="flex" mt={2}>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Box>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          verify_code: Yup.string().max(255).required('Verification code is required')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <>
            <h3>Email Verification</h3>
            <p>We have sent a verification code to your email.</p>
            <form>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                className="verification-input"
                helperText={touched.email && errors.email}
                label="Verification Code"
                margin="normal"
                name="verify_code"
                onBlur={(e) => {
                  setOTPinput(e.target.value);
                }}
                onChange={(e) => {
                  setOTPinput(e.target.value);
                }}
                type="text"
                value={OTPinput}
                variant="outlined"
              />
              <Box mt={2}>
                <Button onClick={() => verifyOTP()} color="primary" fullWidth size="large" type="submit" variant="contained">
                  Verify Account
                </Button>
              </Box>

              <a color="primary" className="resend-otp" onClick={() => resendOTP()}>
                {' '}
                Didn't receive code?
                {disable ? "Resend OTP in {timerCount}s" : ' Resend OTP'}
              </a>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FireOTPInput;
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
                <FireOTPInput />
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

export default OTPInput;
