export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    console.log("Loggin in...");
    this.loggedIn = true;
  }

  logout() {
    console.log("Loggin out...");
    this.loggedIn = false;
  }
}
