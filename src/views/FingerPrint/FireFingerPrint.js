import React from 'react';

// material-ui
import { Box, Button } from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { create, get, parseCreationOptionsFromJSON, parseRequestOptionsFromJSON } from '@github/webauthn-json/browser-ponyfill';
import { getRegistrations } from './Methods';
// assets

const FireFingerPrint = ({ ...rest }) => {
  function registeredCredentials() {
    return getRegistrations().map((reg) => ({
      id: reg.rawId,
      type: reg.type
    }));
  }

  async function authenticate() {
    const cro = parseRequestOptionsFromJSON({
      publicKey: {
        challenge: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
        allowCredentials: registeredCredentials(),
        userVerification: 'discouraged'
      }
    });
    return get(cro)
      .then(() => {
        alert('Successfully Logged In!');
      })
      .catch(() => {
        alert('Login Failed!');
      });
  }
  async function register() {
    const cco = parseCreationOptionsFromJSON({
      publicKey: {
        challenge: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
        rp: { name: 'Localhost, Inc.' },
        user: {
          id: 'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
          name: 'test_user',
          displayName: 'Test User'
        },
        pubKeyCredParams: [],
        excludeCredentials: registeredCredentials(),
        authenticatorSelection: { userVerification: 'discouraged' },
        extensions: {
          credProps: true
        }
      }
    });
    await create(cco)
      .then(() => {
        alert('Successfully Registered!');
      })
      .catch(() => {
        alert('Registration Failed!');
      });
  }
  return (
    <>
      <Box alignItems="center" display="flex" mt={2}>
        <h4 className="text-2xl font-bold mb-4">Fingerprint Module</h4>
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
        {({ handleSubmit }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <Box mt={2}>
              <Button color="secondary" onClick={register} fullWidth size="large" type="submit" variant="contained">
                Register User
              </Button>
            </Box>

            <Box mt={2}>
              <Button color="primary" onClick={authenticate} fullWidth size="large" type="submit" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FireFingerPrint;
