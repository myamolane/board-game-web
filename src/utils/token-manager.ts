export class TokenManager {
  token: string | null;
  constructor(newToken?: string) {
    this.token = newToken || localStorage.getItem('token');
  }

  setToken(newToken: string) {
    this.token = newToken;
  }

  getToken() {
    return this.token;
  }

  static __ins: TokenManager;

  static getIns(newToken?: string) {
    if (!TokenManager.__ins) {
      TokenManager.__ins = new TokenManager(newToken);
    }
    if (newToken) {
      TokenManager.__ins.setToken(newToken);
    }
    return TokenManager.__ins;
  }
  
}