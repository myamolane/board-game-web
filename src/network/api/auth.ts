import { net } from "../net";


export function login(data) {
  console.log('fuck');
  return net.post('/admin/login', data);
}