import { loggedState } from '@/models/user';
import { login } from '@/network/api/auth';
import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'umi';

export interface ILoginPageProps {

}
const LoginPage: React.FC<ILoginPageProps> = (props) => {
  const {}  = props;
  const [logged, setLogged] = useRecoilState(loggedState);
  const history = useHistory();
  useEffect(() => {
    if (logged) {
      history.push('/home');
    }
  }, [logged]);
  const onLogin = useCallback(() => {
    axios.post('/api/v1/admin/login', {
      Username: 'username',
      Password: 'password',
    })
  }, []);
  return (
    <div>
      <button onClick={login}>登录</button>
      <button onClick={onLogin}>登录</button>
    </div>
  );
};

export default LoginPage;
