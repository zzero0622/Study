import React from 'react';
import axios from 'axios';

function Naver(props) {
  const login = () => {
    axios.get('http://localhost:5000/naverlogin').then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <button onClick={login}>네이버 로그인</button>
    </>
  );
}

export default Naver;
