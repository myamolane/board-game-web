import { atom } from "recoil";

export const loggedState = atom({
  key: 'loginState',
  default: false,
});
