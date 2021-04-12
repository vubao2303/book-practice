import React, { useState, useEffect } from "react";
// inport SavedCard from 

function Saved() {
  const [book, setBook] = useState([]);

  function saveBook() {
    API.getBooksLocal().then((book) => {
      setBooks(books.data)
    })
      .catch(err => console.log(err));
  };


  // the way useEffect works 
  // let you perform side effects in function components 
  // useEffect run after very render by default  
  useEffect(() => { saveBook() }, [])
}