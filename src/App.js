import React , {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';

import "./_app.scss"

import  { Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';




const Layout = ({children}) => {

  const [sidebar,toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className = "app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>

        {/* fluid property removes the default padding of the container */}
        <Container fluid className="app_main"> 
          {children}
        </Container> 

      </div>
    </>
  );
} 

const App = () => {

  const {accessToken,loading} = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
}, [accessToken, loading, navigate]);


  return (

      // {/* Route does the same thing switch does
      // which is once a path matches do not check any further
      // Also it makes it so that complete matching is done not the partial one */}
      <Routes>
        
        <Route
          path='/'
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />

        <Route
          path='/auth'
          element={
            <LoginScreen/>
          }
        />

        <Route
          path='/search'
          element={
            <h1>Search</h1>
          }
        />

        {/* This route is like the default case of switch-case
        In case the path is invalid it will re-route the user to HomeScreen
        Also we pass * so that any path here because we want all the invalid ones
        who do not match any other ones to fall here */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

  );
};

export default App;