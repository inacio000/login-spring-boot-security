import React, { useState } from 'react';
import "./style.css";

export default function Header(props) {
  const [session] = useState("welcome");

  return (
    <>
      {props.session === "welcome" && (
        <>
          <header className="headerContainer">
              <div className="headerContent">
                <a href="#"><img src={props.logoSrc} alt="in.news" /></a>
                <nav>
                  <a href="#" className="active">Home</a>
                  <a href="#">Posts</a>
                </nav>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button className="btn btn-primary" onClick={props.login}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </header>
        </>
      )}
      {props.session === "login" && (
        <>
          <header className="headerContainer">
              <div className="headerContent">
                <a href="#"><img src={props.logoSrc} alt="in.news" /></a>
                <nav>
                  <a href="#" className="active">Home</a>
                  <a href="#">Posts</a>
                </nav>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button className="btn btn-dark" style={{ margin: '10px' }} onClick={props.logout}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </header>
        </>
      )}
      {props.session === "messages" && (
        <>
          <header className="headerContainer">
              <div className="headerContent">
                <a href="#"><img src={props.logoSrc} alt="in.news" /></a>
                <nav>
                  <a href="#" className="active">Home</a>
                  <a href="#">Posts</a>
                </nav>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button className="btn btn-dark" style={{ margin: '10px' }} onClick={props.logout}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </header>
        </>
      )}
    </>
  );
};