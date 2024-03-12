
import React from 'react';
import AuthForm from './AuthForm';
import { sendUserAuthRequest } from '../api-helpers/api-helpers';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const Auth = () => {
  const navigate = useNavigate();

  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then((res) => {
        console.log(res);
        if (data.signup) {
          // Redirect to login page after successful signup
          navigate('/auth');
          window.location.reload(false)
        } else {
          // Redirect to user dashboard after successful login
          navigate('/userdashboard');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthForm onSubmit={getData} />
      </ThemeProvider>
  );
};

export default Auth;