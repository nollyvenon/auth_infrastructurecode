import React, {createContext} from 'react';

// material-ui
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from 'routes/index';


// third-party
import {useSelector} from 'react-redux';

// project import
import theme from 'themes';
//import Routes from '../../../server/routes/api/route';
//import Routes from '../../../server/routes/api/users';

import NavigationScroll from './NavigationScroll';

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import {loginUser, setCurrentUser, logoutUser, registerUser} from "../actions/authActions";
import {Provider} from "react-redux";
import store from '../store';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./login";
    }
}
export const RecoveryContext = createContext();
// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const [email, setEmail] = React.useState('login')
    const [page, setPage] = React.useState('login')
    const [username, setUsername] = React.useState('')
    const [otp, setOTP] = React.useState('')
    const [auth, setAuth] = React.useState('')

    return (
        <>
            {
                <RecoveryContext.Provider store={store}
                                          value={{loginUser, registerUser, username, email, page, otp, auth}}>
                    <NavigationScroll>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={theme(customization)}>
                                <CssBaseline/>
                                <Routes/>
                            </ThemeProvider>
                        </StyledEngineProvider>
                    </NavigationScroll>
                </RecoveryContext.Provider>
            }
        </>
    );
};

export default App;
