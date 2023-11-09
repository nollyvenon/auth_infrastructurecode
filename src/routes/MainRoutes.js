import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
const TestPage = Loadable(lazy(() => import('../views/TestPage')));
const Login = Loadable(lazy(() => import('../views/Login')));
const Register = Loadable(lazy(() => import('../views/Register')));
const FaceRecognition = Loadable(lazy(() => import('../views/FaceRecognition')));
const FingerPrint = Loadable(lazy(() => import('../views/FingerPrint')));
const ForgotPassword = Loadable(lazy(() => import('../views/ForgotPassword')));
const OTPInput = Loadable(lazy(() => import('../views/OTPInput')));
const PasswordReset = Loadable(lazy(() => import('../views/PasswordReset')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/face-recognition', element: <FaceRecognition /> },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> },
    { path: '/test-page', element: <TestPage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/fingerprint', element: <FingerPrint /> },
    { path: '/forgotPassword', element: <ForgotPassword /> },
    { path: '/OTPInput', element: <OTPInput /> },
    { path: '/PasswordReset', element: <PasswordReset /> }
  ]
};

export default MainRoutes;
