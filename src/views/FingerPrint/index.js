import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid } from '@mui/material';

// project import
import FireFaceRecognition from '../FaceRecognition/FireFaceRecognition';

// assets
import Logo from 'assets/images/logo.png';
import CodeDisplay from 'component/CodeDisplay';
import FireFingerPrint from './FireFingerPrint';

// ==============================|| LOGIN ||============================== //

const FaceRecognition = () => {
  const theme = useTheme();
  const code = `import React from 'react';

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
  
  
  
  
  Methods.js
  
  
  
  export function getRegistrations() {
    const registrations = JSON.parse(localStorage.webauthnExampleRegistrations || '[]');
    return registrations;
  }
  
  export function setRegistrations(registrations) {
    localStorage.webauthnExampleRegistrations = JSON.stringify(registrations, null, '  ');
    displayRegistrations();
  }
  
  export function saveRegistration(registration) {
    const registrations = getRegistrations();
    registrations.push(registration.toJSON());
    setRegistrations(registrations);
  }
  
  function registrationElem() {
    return document.querySelector('#registrations');
  }
  
  export function displayRegistrations() {
    registrationElem().value = JSON.stringify(getRegistrations(), null, '  ');
  }
   `;
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.black, height: '100%', minHeight: '100vh' }}
    >
      <Grid item xs={11} sm={7} md={6} lg={4}>
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
                <FireFingerPrint />
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

export default FaceRecognition;
