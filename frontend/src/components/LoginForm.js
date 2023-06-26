import React, { useState } from 'react';
import classNames from 'classnames';

const LoginForm = (props) => {
  const [active, setActive] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = props.onLogin;
  const onRegister = props.onRegister;

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "login") {
      setLogin(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    onLogin(e, login, password);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    onRegister(e, firstName, lastName, login, password);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <button className={classNames("nav-link", active === "login" ? "active" : "")} id="tab-login" onClick={() => setActive("login")}>
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className={classNames("nav-link", active === "register" ? "active" : "")} id="tab-register" onClick={() => setActive("register")}>
              Register
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className={classNames("tab-pane", "fade", active === "login" ? "show active" : "")} id="pills-login">
            <form onSubmit={onSubmitLogin}>
              <div className="form-outline mb-4">
                <input type="login" id="loginName" name="login" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="loginName">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" name="password" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
            </form>
          </div>
          <div className={classNames("tab-pane", "fade", active === "register" ? "show active" : "")} id="pills-register">
            <form onSubmit={onSubmitRegister}>
              <div className="form-outline mb-4">
                <input type="text" id="firstName" name="firstName" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="lastName" name="lastName" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="lastName">
                  Last name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="login" name="login" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="login">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="registerPassword" name="password" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-3">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
