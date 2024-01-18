import PropTypes from "prop-types"
import { useState } from "react"
import { EditBook } from "./EditBook";
import { useBooksContext } from "../hooks/useBooksContext";

export function Book({ book }) {
    const { handleDeleteBook } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false)

    const handleToggleEditBook = () => {
        setShowEdit(!showEdit)
    }

    const onDeleteBook = () => {
        handleDeleteBook(book.id)
    }

    let content = (
        <div>
            <h3 className="text-white">{book.title}</h3>
            <span className="text-white">- {book.author}</span>
        </div>            
    )

    if (showEdit) {
        content = <EditBook bookInfo={book} onToggleEdit={handleToggleEditBook}/>
    }

    const divStyle = {
        '--bs-bg-opacity': 0.75, // Set the opacity value as needed
        // Add other styles as needed
      };

    return (
        <>
            <div className="book-show bg-dark bg-gradient" style={divStyle}>
                {content}
                <div className="actions">
                    <button className="edit" onClick={handleToggleEditBook} >
                    Edit
                    </button>
                    <button className="delete" onClick={onDeleteBook}>
                    Delete
                    </button>
                </div>
            </div>
        </>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    onEditBook: PropTypes.func,
    onDeleteBook: PropTypes.func,
}