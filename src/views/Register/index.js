import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// project import
import FirebaseRegister from './FirebaseRegister';
import { Link } from 'react-router-dom';

// assets
import Logo from 'assets/images/logo.png';
import CodeDisplay from 'component/CodeDisplay';

// ==============================|| REGISTER ||============================== //

const Register = () => {
  const theme = useTheme();
  const code = `import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from 'assets/images/social-google.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),

  password: Yup.string()

    .min(2, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required')
});

// ==============================|| FIREBASE REGISTER ||============================== //

const FirebaseRegister = ({ auth, registerUser, ...rest }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();

  // const [password2, setPassword2] = useState('');
  // const [errors, setErrors] = useState({}); // Define errors using state
  const [] = useState({ email: '', password: '', errors: {}, password2: '', auth: auth });

  useEffect(() => {
    if (auth?.isAuthenticated) {
      navigate('/dashboard');
    }
  }, [auth?.isAuthenticated]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    // Update state using the correct setter function
    switch (e.target.id) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'password2':
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2
    };

    console.log(newUser);

    const tryRegister = registerUser(newUser);
    if (tryRegister === false) {
      navigate('/login');
      //alert('1111');
    } else {
      toast.warn('Registration was not successful. Try again');
      alert('Registration was not successful. Try again');
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          {/*<Button
            fullWidth={true}
            sx={{
              fontSize: { md: '1rem', xs: '0.875rem' },
              fontWeight: 500,
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[600],
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: theme.palette.grey[100]
              }
            }}
            size="large"
            variant="contained"
          >
            <img
              src={Google}
              alt="google"
              width="20px"
              style={{
                marginRight: '16px',
                '@media (maxWidth:900px)': {
                  marginRight: '8px'
                }
              }}
            />{' '}
            Register with Google
          </Button>*/}
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: 'admin@phoenixcoded.net',
          password: 'aA123456',
          password2: 'aA123456',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required('Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
          password2: Yup.string().max(255).required('Confirm Password is required')
        })}
        onSubmit={onSubmit}
      >
        {({ errors, handleBlur, isSubmitting, touched }) => (
          <form validationschema={SignupSchema} onSubmit={onSubmit} {...rest}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField
              error={Boolean(touched.name && errors.name)}
              fullWidth
              helperText={touched.name && errors.name}
              label="Full Name"
              margin="normal"
              id="name"
              name="name"
              onBlur={onChange}
              onChange={onChange}
              type="text"
              value={name}
              variant="outlined"
            />
            <span className="red-text">{errors.name}</span>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address / Username"
              margin="normal"
              id="email"
              name="email"
              onBlur={onChange}
              onChange={onChange}
              value={email}
              error={Boolean(touched.email && errors.email)}
              type="email"
              variant="outlined"
            />
            <span className="red-text">{errors.email}</span>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                onBlur={handleBlur}
                label="Password"
                onChange={onChange}
                value={password}
                error={errors.password}
                id="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text">
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password2 && errors.password2)}
              sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}
              variant="outlined"
            >
              <InputLabel htmlFor="password2">Password</InputLabel>
              <OutlinedInput
                type={showPassword2 ? 'text' : 'password'}
                name="password2"
                onBlur={handleBlur}
                label="Confirm Password"
                onChange={onChange}
                value={password2}
                error={errors.password2}
                id="password2"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password2 && errors.password2 && (
                <FormHelperText error id="standard-weight-helper-text">
                  {' '}
                  {errors.password2}{' '}
                </FormHelperText>
              )}
            </FormControl>

            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box my={0}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label={
                  <>
                    I have read the &nbsp;
                    <Link to="#">Terms and Conditions </Link>
                  </>
                }
              />
            </Box>
            <Box mt={2}>
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

//export default FirebaseRegister;

FirebaseRegister.propTypes = {
  registerUser: PropTypes.func.isRequired
  //auth: PropTypes.object.isRequired,
  //errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(FirebaseRegister));
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
            my: 3,
            mx: 'auto',
            '& .MuiCardContent-root': {
              flexGrow: 1,
              flexBasis: '50%',
              width: '50%'
            },
            maxWidth: 475
          }}
        >
          <CardContent sx={{ p: theme.spacing(5, 4, 3, 4) }}>
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography color="textPrimary" gutterBottom variant="h2">
                      Register
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      To keep connected with us.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <RouterLink to="/">
                      <img alt="Auth method" src={Logo} />
                    </RouterLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FirebaseRegister />
              </Grid>
              <Grid container justifyContent="flex-start" sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}>
                <Grid item>
                  <Typography variant="subtitle2" color="secondary" component={Link} to="/login" sx={{ textDecoration: 'none', pl: 2 }}>
                    Having an account
                  </Typography>
                </Grid>
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

export default Register;
