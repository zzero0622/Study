import React from 'react';
import { GoogleAPI } from 'react-google-oauth';
import { Link } from 'react-router-dom';

function Oauth(props) {
  const onUpdateSigninStatus = () => {
    return <Link to='/Oauth/success'></Link>;
  };
  const onInitFailure = () => {
    return <Link to='/Oauth/fail'></Link>;
  };
  return (
    <>
      <GoogleAPI clientId='109255332954972844235' onUpdateSigninStatus={onUpdateSigninStatus} onInitFailure={onInitFailure}></GoogleAPI>
    </>
  );
}

export default Oauth;
