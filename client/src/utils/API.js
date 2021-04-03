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

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  getBooks: function (books) {
    return new Promise((resolve, reject) => {
      const Query = "https://www.googleapis.com/books/v1/volumes?q=" + books;
      console.log(Query)
      axios.get(Query).then((res) => {
        const booksdata = res.data.items;
        const results = booksdata.map((book) => {
          console.log(book)
          if (book.volumeInfo.imageLinks === undefined) {
            return {
              title: book.volumeInfo.title,
              author: book.volumeInfo.author,
              image: "https://via.placeholder.com/130x200.png",
              synopsis: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            }
          }
          else {
            return {
              title: book.volumeInfo.title,
              author: book.volumeInfo.author,
              image: book.volumeInfo.imageLinks.thumbnail,
              synopsis: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          }
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },
  getBookList: function () {
    return new Promise((resolve) => {
      resolve();
    })
  }

}