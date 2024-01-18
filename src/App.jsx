import { useEffect } from "react"
import { AddBook } from "./components/AddBook"
import { BookList } from "./components/BookList"
import { useBooksContext } from "./hooks/useBooksContext";

function App() {
    const {fetchBooks} = useBooksContext();
    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    return (
        <>
            <AddBook />
            <BookList />
        </>
    )
}

export default App
