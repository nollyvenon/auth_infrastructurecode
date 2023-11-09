import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid } from '@mui/material';

// project import
import FireFaceRecognition from './FireFaceRecognition';
import FireFaceRecognitionCode from './FireFaceRecognitionCode';
// assets
import Logo from 'assets/images/logo.png';
import CodeDisplay from 'component/CodeDisplay';

// ==============================|| LOGIN ||============================== //

const FaceRecognition = () => {
  const theme = useTheme();
  const code = `import React, { useEffect } from 'react';

  // material-ui
  import { Box, Button } from '@mui/material';
  
  //  third party
  import * as Yup from 'yup';
  import { Formik } from 'formik';
  
  // assets
  import faceIO from '@faceio/fiojs';
  
  // ==============================|| FIREBASE LOGIN ||============================== //
  
  const FireFaceRecognitionCode = ({ ...rest }) => {
    let faceio;
  
    useEffect(() => {
      faceio = new faceIO('fioa403c');
    }, []);
  
    const authenticateUser = () => {
      faceio
        .authenticate({
          /* authentication options */
          locale: 'auto' // Default user locale
        })
        .then((userData) => {
          // Handle successful authentication
          console.log('Success, user identified');
          // Grab the facial ID linked to this particular user which will be same
          // for each of his successful future authentication. FACEIO recommend
          // that your rely on this Facial ID if you plan to uniquely identify
          // all enrolled users on your backend for example.
          console.log('Linked facial Id: ' + userData.facialId);
          // Grab the arbitrary data you have already linked (if any) to this particular user
          // during his enrollment via the payload parameter of the enroll() method.
          console.log('Payload: ' + JSON.stringify(userData.payload));
        })
        .catch((errCode) => {
          // handle authentication failure. Visit:
          // https://faceio.net/integration-guide#error-codes
          // for the list of all possible error codes
  
          console.log(errCode);
          handleError(errCode);
        });
    };
  
    const enrollNewUser = () => {
      faceio
        .enroll({
          /* enrollment options */
          locale: 'auto', // Default user locale
          payload: {
            /* The payload we want to associate with this user
             * which is forwarded back to us upon future
             * authentication of this particular user.*/
            whoami: 123456, // Example of dummy ID linked to this particular user
            email: 'john.doe@example.com',
            gender: ''
          }
        })
        .then((userInfo) => {
          // Handle successful enrollment
          alert(
            "User Successfully Enrolled! Details:
                  "
          );
          console.log(userInfo);
        })
        .catch((errCode) => {
          // handle enrollment failure. Visit:
          // https://faceio.net/integration-guide#error-codes
          // for the list of all possible error codes
          console.log(errCode);
          handleError(errCode);
        });
    };
  
    function handleError(errCode) {
      // Handle error here
      // Log all possible error codes during user interaction..
      // Refer to: https://faceio.net/integration-guide#error-codes
      // for a detailed overview when these errors are triggered.
      const fioErrs = faceio.fetchAllErrorCodes();
      switch (errCode) {
        case fioErrs.PERMISSION_REFUSED:
          console.log('Access to the Camera stream was denied by the end user');
          break;
        case fioErrs.NO_FACES_DETECTED:
          console.log('No faces were detected during the enroll or authentication process');
          break;
        case fioErrs.UNRECOGNIZED_FACE:
          console.log("Unrecognized face on this application's Facial Index");
          break;
        case fioErrs.MANY_FACES:
          console.log('Two or more faces were detected during the scan process');
          break;
        case fioErrs.FACE_DUPLICATION:
          console.log('User enrolled previously (facial features already recorded). Cannot enroll again!');
          break;
        case fioErrs.MINORS_NOT_ALLOWED:
          console.log('Minors are not allowed to enroll on this application!');
          break;
        case fioErrs.PAD_ATTACK:
          console.log('Presentation (Spoof) Attack (PAD) detected during the scan process');
          break;
        case fioErrs.FACE_MISMATCH:
          console.log('Calculated Facial Vectors of the user being enrolled do not matches');
          break;
        case fioErrs.WRONG_PIN_CODE:
          console.log('Wrong PIN code supplied by the user being authenticated');
          break;
        // ...
        // Refer to the boilerplate at: https://gist.github.com/symisc/34203d2811a39f2a871373abc6dd1ce9
        // for the list of all possible error codes.
      }
    }
  
    // const [errors, setErrors] = useState({});
  
    return (
      <>
        <Box alignItems="center" display="flex" mt={2}>
          <h4 className="text-2xl font-bold mb-4">FaceRecognition Module</h4>
        </Box>
        <textarea>
          <code>
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
              {({ handleSubmit, isSubmitting }) => (
                <form noValidate onSubmit={handleSubmit} {...rest}>
                  <Box mt={2}>
                    <Button color="secondary" onClick={enrollNewUser} fullWidth size="large" type="submit" variant="contained">
                      Register User
                    </Button>
                  </Box>
  
                  <Box mt={2}>
                    <Button color="primary" onClick={authenticateUser} fullWidth size="large" type="submit" variant="contained">
                      Log In
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </code>
        </textarea>
      </>
    );
  };
  
  export default FireFaceRecognitionCode;
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
            maxWidth: '90%',
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
              <Grid item xs={12} md={6} lg={6}>
                <FireFaceRecognition />
              </Grid>
              <Grid item xs={6}>
                <FireFaceRecognitionCode />
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
