export class LoginModel {
  username: string;
  password: string;
  constructor(json: any = null) {
    if (json !== null) {
      this.username = json.username;
      this.password = json.password;
    } else {
      this.username = null;
      this.password = null;
    }
  }
}
