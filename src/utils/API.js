import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=10&key=AIzaSyCOvx3OS4Ceq3UAB_GK5YhqGntWEzjoWmQ";

export default {
  // Search for books
  searchBooks: query => {
    return axios.get(URL + query);
  },
  // Saves a book to the database
  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  },
  // Gets all books
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: id => {
    return axios.get(`/api/books/${id}`);
  },
  // Deletes the book with the given id
  deleteBook: id => {
    return axios.delete(`/api/books/${id}`);
  }
};