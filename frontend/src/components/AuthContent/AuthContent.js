import React, { useState, useEffect } from 'react';
import { request, setAuthHeader } from '../../helpers/axios_helper';
import "./styleAuth.css";
import { SubscribeButton } from '../Buttons/SubscribeBuutton';

function AuthContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request("GET", "/messages", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.status === 401 || 404) {
          setAuthHeader(null);
        } else {
          setData(error.response.code);
        }
      });
  }, []);

  return (
    // <div className="row justify-content-md-center">
    //   <div className="col-4">
    //     <div className="card" style={{ width: '18rem' }}>
    //       <div className="card-body">
    //         <h5 className="card-title">Backend response</h5>
    //         <p className="card-text">Content:</p>
    //         <ul>
    //           {data &&
    //             data.map((line) => (
    //               <li key={line}>{line}</li>
    //             ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <main className="contentContainer">
        <section className="hero">
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br/> 
            <span>for $99.9 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="./Mulher.png" alt="Girl coding" />
      </main>
  );
}

export default AuthContent;
