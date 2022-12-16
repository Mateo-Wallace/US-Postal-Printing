import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Auth from './utils/auth';

/// IMPORT PAGES ///
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ProductsServices from './pages/Products&Services';
import Tracking from './pages/Tracking';
import MakeAnOrder from './pages/MakeAnOrder';
import ContactUs from './pages/ContactUs';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';
import './App.css';
import Nav from './components/Header';
import StickyFooter from './components/Footer';
import SwipeableEdgeDrawer from './components/Header/SwipeableEdgeDrawer';


const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#149be6',
      dark: '#0d579b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <ThemeProvider theme={theme} >
      <Nav />
      <div style={{ marginTop: '95px'}}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products&services' element={<ProductsServices />} />
          <Route path='/make-an-order' element={<MakeAnOrder />} />
          <Route path='/tracking' element={<Tracking />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route
            path='dashboard/:userId'
            element={Auth.loggedIn() ? <Dashboard style={{ zIndex: -1, position: 'sticky' }} /> : <ProtectRoute />}
          />
        </Routes>
        </div>
        <SwipeableEdgeDrawer />
        <StickyFooter />
        </ThemeProvider>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
