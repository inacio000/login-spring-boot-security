import React, { useState } from 'react';
import logo from '../logo.svg';

import { request, setAuthHeader } from '../helpers/axios_helper';

import AuthContent from './AuthContent/AuthContent';
import LoginForm from './LoginForm';
import WelcomeContent from '../components/Welcome/WelcomeContent'
import Header from './Header/Header';

function AppContent() {
  const [componentToShow, setComponentToShow] = useState("welcome");

  const login = () => {
    setComponentToShow("login");
  };

  const logout = () => {
    setComponentToShow("welcome");
    setAuthHeader(null);
  };

  const onLogin = (e, username, password) => {
    e.preventDefault();
    request(
      "POST",
      "/login",
      {
        login: username,
        password: password
      }
    )
      .then((response) => {
        setAuthHeader(response.data.token);
        setComponentToShow("messages");
      })
      .catch((error) => {
        setAuthHeader(null);
        alert("login or password incorrect")
      });
  };

  const onRegister = (event, firstName, lastName, username, password) => {
    event.preventDefault();
    request(
      "POST",
      "/register",
      {
        firstName: firstName,
        lastName: lastName,
        login: username,
        password: password
      }
    )
      .then((response) => {
        setAuthHeader(response.data.token);
        setComponentToShow("messages");
      })
      .catch((error) => {
        setAuthHeader(null);
        setComponentToShow("welcome");
      });
  };

  return (
    <>
      <Header
        login={login}
        logout={logout}
        logoSrc={logo}
        session={componentToShow}
      />
      {componentToShow === "welcome" && (
        <>
          <WelcomeContent />
        </>
      )}
      {componentToShow === "login" && (
        <>
          <LoginForm onLogin={onLogin} onRegister={onRegister} />
        </>
      )}
      {componentToShow === "messages" && (
        <>
          <AuthContent />
        </>
      )}
    </>
  );
}

export default AppContent;
