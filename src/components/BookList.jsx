import { Book } from "./Book"
import { useBooksContext } from "../hooks/useBooksContext";

export function BookList() {

    const { books } = useBooksContext();

    const renderBooks = books.map(book => {
        return (
            <Book key={book.id} book={book} />
        )
    })
    return (
        
        <div className="book-list">
            {renderBooks}
        </div>
    )
}
