import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useBooksContext } from "../hooks/useBooksContext"
import '../assets/override_bootstrap.css';

export function AddBook() {
    const { handleAddBook } = useBooksContext();

    const [book, setBook] = useState({
        title: '',
        author: ''
    })

    const [showAddBook, setShowAddBook] = useState(false);

    const formRef = useRef(null);

    const handleOnTitleChange = (e) => {
        const updatedBook = {
            ...book,
            title: e.target.value
        }

        setBook(updatedBook)
    }

    const handleOnAuthorChange = (e) => {
        const updatedBook = {
            ...book,
            author: e.target.value
        }

        setBook(updatedBook)
    }

    const onAddBook = (e) => {
        e.preventDefault()
        handleAddBook(book)
        setBook({
            title: '',
            author: ''
        })
    }

    const onFocusAddBook = () => {
        setShowAddBook(true);
    }

    const onUnfocusAddBook = () => {
        // setShowAddBook(false);
    }

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowAddBook(false);
        }
      };
    
    useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);

    const formOpacity = {
        '--bs-bg-opacity': 0.75, // Set the opacity value as needed
        // Add other styles as needed
      };

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-6 mx-auto" ref={formRef}>
                        <form 
                            className="form-control border border-secondary shadow-sm p-3 mb-5 rounded bg-light bg-gradient" 
                            onSubmit={onAddBook} 
                            onBlur={onUnfocusAddBook}
                            style={formOpacity}
                        >
                            {
                                showAddBook ? (
                                    <>
                                        <div className="my-3">
                                            <textarea 
                                                className="form-control border border-0 bg-light bg-gradient" 
                                                rows="3"value={book.title} 
                                                onChange={handleOnTitleChange} 
                                                placeholder="Title"
                                                autoFocus
                                                onFocus={onFocusAddBook}
                                                style={formOpacity}
                                            />
                                        </div>
                                        <div className="my-3">
                                            <input 
                                                type="text" 
                                                className="form-control border border-0 bg-light bg-gradient" 
                                                value={book.author} 
                                                onChange={handleOnAuthorChange}
                                                placeholder="Author"
                                                onFocus={onFocusAddBook}
                                                style={formOpacity}
                                            />
                                        </div>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-secondary justify-content-end">
                                                Add
                                            </button>
                                        </div>
                                        
                                    </>
                                ) : (
                                    <>
                                        <div className="my-3">
                                            <input 
                                                type="text" 
                                                className="form-control border border-0 bg-light bg-gradient text-white" 
                                                onFocus={onFocusAddBook}
                                                placeholder="Add Book..."
                                                style={formOpacity}
                                            />
                                        </div>
                                    </>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

AddBook.propTypes = {
    onAddBook: PropTypes.func,
}