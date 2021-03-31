import axios from "axios";

export default {

  // these are the function coming from the backend routes 
  getBooksLocal: function () {
    return axios.get("/api/books");
  },

  getBook: function (id) {
    return axios.get("/api/books" + id);
  },

  deleteBook: function (id) {
    return axios.delete("/api/books" + id)
  },



}