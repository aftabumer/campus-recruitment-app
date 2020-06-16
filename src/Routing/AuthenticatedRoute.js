const AuthenticatedRoute = {
  isAuthenticated: false,
  authenticate() {
      debugger
    this.isAuthenticated = true;
    alert("login success")
  },
  signout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
};
export default AuthenticatedRoute;

