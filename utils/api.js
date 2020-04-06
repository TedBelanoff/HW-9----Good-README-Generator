//Axios Import
const axios = require("axios");
//Pull Axios data
const api = {
  getUser(username) {
    return axios
    .get(`https://api.github.com/users/${username}`)
      .then(GithubData => {
        return GithubData})
    .catch(err => {
      console.log('Username input not valid');
      process.exit();
    })
  } 
};

module.exports = api;
