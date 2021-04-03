import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchBar from '../components/SearchBar';
import Result from '../components/ResultCard';


function Books() {
  // ?set state 
  const [books, setBooks] = useState([]);

  function loadBooks(event) {
    console.log("loaded")
    event.preventDefault();
    // console.log("loadedbooks")
    var searchName = event.target.value;
    if (searchName === "") {
      setBooks([]);
    }

    API.getBookList().then(() => {
      API.getBooks(searchName).then((books) => {
        setBooks(books)
      });
    })
      .catch(err => console.log(err));
  }

  function saveBooks(bookData) {
    console.log(bookData);
    API.saveBook({
      title: bookData.title,
      author: bookData.author,
      synopsis: bookData.synopsis,
      image: bookData.image,
      link: bookData.link
    })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <SearchBar loadBooks={loadBooks} />

      {books.map((book, index) => {
        return (<Result
          key={index}
          title={book.title}
          image={book.image}
          author={book.author}
          synopsis={book.synopsis}
          link={book.link}
          saveBooks={saveBooks}
        />

        )
      })}

    </div>
  );
}

export default Books;

