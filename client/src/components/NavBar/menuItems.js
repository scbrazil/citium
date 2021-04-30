import { useContext } from 'react';
import { AppContext } from '../../context/context.js';
// import { handleLoginOpen } from './NavBarMobile.js';
const { loginSwitch, openLoginModal } = useContext(AppContext);

// export const handleLoginOpen = (event) => {
//   event.preventDefault();
//   loginSwitch(true);
//   openLoginModal(true);
// };

const menuItems = [
  {
    menuItem: 'Home',
    pageUrl: '/',
    pageKey: 1,
  },
  {
    menuItem: 'Login',
    pageUrl: '/login',
    pageKey: 2,
  },
  {
    menuItem: 'Dashboard',
    pageUrl: '/dashboard',
    pageKey: 3
  },
  {
    menuItem: 'Journal',
    pageUrl: '/journal',
    pageKey: 4,
  },
  {
    menuItem: 'Favorite Quotes',
    pageUrl: '/favorite-quotes',
    pageKey: 5,
  },
  {
    menuItem: 'About',
    pageUrl: '/about',
    pageKey: 6,
  },
];

