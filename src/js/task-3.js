//3
const user = {
  name: "max",
  password: "111max",
  email: "max@gmail.com",

  login(email, password) {
    return email === this.email && password === this.password;
  },
};
console.log(user.login("max@gmail.com", "111max"));
