import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
// useSearchParams

// 1) useLocation
// - hash : 주소의 #문자열 뒤의 값
// - pathname : 현재 주소 경로
// - search : ?를 포함한 쿼리스트링
// - state : 페이지로 이동시 임의로 넣을 수 있는 상태 값
// - key : location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때 마다 고유의 값이 생성된다.

// http://localhost:3000/product/1?search=productName&q=demo#test

const Product = () => {
  const productId = useParams().productId;
  const location = useLocation();
  const navigate = useNavigate();
  // const keyWords = useSearchParams;
  // const keyWord = useSearchParams.get('search');
  return (
    <>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li>hash : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>
        {/* <li>keyWords : {keyWords}</li>
        <li>keyWord : {keyWord}</li> */}
        <li>
          <button onClick={() => navigate(-2)}>Go 2 pages back</button>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>Go back</button>
        </li>
        <li>
          <button onClick={() => navigate(1)}>Go forward</button>
        </li>
        <li>
          <button onClick={() => navigate(2)}>Go 2 pages forward</button>
        </li>
        <li>
          <button onClick={() => navigate('/')}>Go Root</button>
        </li>
        <li>
          <button onClick={() => navigate('/', { replace: true })}>Go Root</button>
        </li>
      </ul>
    </>
  );
};

export default Product;
