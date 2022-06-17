import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Oauth from './google/oauth.js';
import Naver from './naver/naver.js';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';
import ReactCalendarTimeline from './calendar/ReactCalendarTimeline';
import Dayz from './calendar/Dayz';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/google/oauth' element={<Oauth />}></Route>
          <Route path='/naver' element={<Naver />}></Route>
          <Route path='/reactCalendarTimeline' element={<ReactCalendarTimeline />}></Route>
          <Route path='/dayz' element={<Dayz />}></Route>
          {/* <Route path='/product/*' element={<Product />}></Route> */}
          <Route path='/product/:productId' element={<Product />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
