import React from 'react';
import axios from 'axios';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Oauth from './Oauth';
axios.defaults.withCredentials = true;
function App() {
  const kakao = {
    clientID: 'd1caacd7aa5be0ab34aa25806f27c393',
    clientSecret: 'mGRhzGji4Y3CHpo2zk1agyJiHY4ddCAj',
    // redirectUri: 'http://localhost:4000/oauth/kakao/callback',
    redirectUri: 'http://localhost:3000/oauth/kakao/auth',
    PATH: 'https://kauth.kakao.com/oauth/authorize',
  };
  const kakaoAuthURL = `${kakao.PATH}?response_type=code&client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}`;
  const kakaoLogin = async () => {
    window.location.href = kakaoAuthURL;
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <div>
            <Switch>
              <Route exact path='/'>
                <button className='kakao-button' type='submit' onClick={kakaoLogin}>
                  카카오 로그인
                </button>
                <a href={kakaoAuthURL}>login</a>
              </Route>
              <Route path='/oauth/kakao/auth'>
                <Oauth />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
