import { createContext, useCallback, useState } from "react";
import { createBook, getBooks, updateBook, deleteBook } from "../utils/bookApi";

const BooksContext = createContext({
    books: [],
    handleAddBook: () => {},
    handleUpdateBook: () => {},
    handleDeleteBook: () => {},
    fetchBooks: () => {}
});
    

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    // const fetchBooks = async () => {
    //     const bookRecords = await getBooks()
        
    //     setBooks(bookRecords)
    // }

    const fetchBooks = useCallback(async () => {
        const bookRecords = await getBooks()
        
        setBooks(bookRecords)
    }, [])

    const handleAddBook = async (book) => {
        const response = await createBook(book)

        const updatedBook = [
            response,
            ...books
        ]
        
        setBooks(updatedBook)
    }

    const handleUpdateBook = async (book, id) => {
        const response = await updateBook(id, book)

        const updatedBook = books.map(bookRecord => {
            if (bookRecord.id === id) {
                return {
                    ...bookRecord,
                    ...response
                }
            }
            return bookRecord
        })

        setBooks(updatedBook)
    }

    const handleDeleteBook = async (id) => {
        const response = await deleteBook(id)

        const updatedBook = books.filter(bookRecord => bookRecord.id !== response.id)
        setBooks(updatedBook)
    }

    return (
        <BooksContext.Provider value={
            {
                books,
                fetchBooks,
                handleAddBook,
                handleUpdateBook,
                handleDeleteBook
            }
        }>
            {children}
        </BooksContext.Provider>
    )

}

export default BooksContext;
