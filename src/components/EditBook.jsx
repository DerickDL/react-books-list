import PropTypes from "prop-types"
import { useState } from "react"
import { useBooksContext } from "../hooks/useBooksContext"

export function EditBook({ bookInfo, onToggleEdit }) {
    const { handleUpdateBook } = useBooksContext();
    const [book, setBook] = useState({
        title: bookInfo?.title,
        author: bookInfo?.author
    })

    const handleTitleChange = (e) => {
        const updatedBook = {
            ...book,
            title: e.target.value
        }

        setBook(updatedBook)
    }

    const handleAuthorChange = (e) => {
        const updatedBook = {
            ...book,
            author: e.target.value
        }

        setBook(updatedBook)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onToggleEdit()
        handleUpdateBook(book, bookInfo.id)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="book-edit">
                <label className="text-white">Title</label>
                <textarea className="form-control" value={book.title} onChange={handleTitleChange} rows="3"/>
                <label className="text-white">Author</label>
                <input className="input" value={book.author} onChange={handleAuthorChange} />
                <button className="btn btn-secondary">Save</button>
            </form>
        </>
    )
}

EditBook.propTypes = {
    bookInfo: PropTypes.object,
    onEditBook: PropTypes.func,
    onToggleEdit: PropTypes.func
}