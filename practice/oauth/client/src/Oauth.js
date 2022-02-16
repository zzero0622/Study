import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Oauth() {
  const history = useHistory();

  let code = new URL(window.location.href).searchParams.get('code');
  axios
    .post('http://localhost:4000/oauth/kakao', { code: code })
    .then((res) => {
      console.log('jwt 토큰 요청');
    })
    .catch((err) => {
      console.log('jwt 토큰 요청 실패');
    });

  return <div>{code}</div>;
}
export default Oauth;
