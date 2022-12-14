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
import { MakeAnOrder } from './pages/MakeAnOrder';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';
import './App.css';
import Nav from './components/Header';


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
      main: '#3f50b5',
      dark: '#002884',
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
      <ThemeProvider theme={theme}>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products&services' element={<ProductsServices />} />
          <Route path='/make-an-order' element={<MakeAnOrder />} />
          <Route
            path='dashboard/:userId'
            element={Auth.loggedIn() ? <Dashboard /> : <ProtectRoute />}
          />
        </Routes>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
