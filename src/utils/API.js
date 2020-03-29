import axios from "axios";

// Export an object from random user API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};