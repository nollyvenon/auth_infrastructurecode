// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'Avasauth',
      caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard/default'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      caption: 'Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'face-recognition',
          title: 'Face Recognition',
          type: 'item',
          url: '/face-recognition',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'fingerprint',
          title: 'Finger Print',
          type: 'item',
          url: '/fingerprint',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'forgotPassword',
          title: 'Forgot Password',
          type: 'item',
          url: '/forgotPassword',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'OTPInput',
          title: 'OTP Input',
          type: 'item',
          url: '/OTPInput',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'PasswordReset',
          title: 'Password Reset',
          type: 'item',
          url: '/PasswordReset',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        {
          id: 'auth',
          title: 'Authentication',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'login',
              title: 'Login',
              type: 'item',
              url: '/login',
              target: true
            },
            {
              id: 'register',
              title: 'Register',
              type: 'item',
              url: '/register',
              target: true
            }
          ]
        }
      ]
    },


    
  ]
};
