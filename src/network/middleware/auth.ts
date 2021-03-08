import { AxiosInstance } from "axios";
import { TokenManager } from '@/utils/token-manager';

export function authMiddleWare(axios: AxiosInstance) {
  axios.interceptors.request.use(
    config => {
      config.timeout = 6000;
      let token = 'Bearer ' + TokenManager.getIns().getToken();
      if (token) {
        config.headers = {
          'Authorization': token,
          'Accept': "application/json",
          'Content-Type': 'application/json'
        }
      }
      if (config.url === 'refresh') {
        config.headers = {
          'refresh-token': sessionStorage.getItem('refresh_token'),
          'Content-Type': 'application/json'
        }
      }
      return config
    },
    error => {
      if (error) {
        // Vue.prototype.$message({
        //   showClose: true,
        //   message: error.Error,
        //   type: 'warning'
        // });
      }
  
      return Promise.reject(error)
    }
  );
}