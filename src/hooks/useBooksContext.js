import { useContext } from "react";
import  BooksContext from "../context/books.jsx";


export const useBooksContext = () => {
    return useContext(BooksContext);
}