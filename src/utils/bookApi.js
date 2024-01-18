import axios from "axios";

const BASE_URL = import.meta.env.VITE_JSON_SERVER_BASE_URL;

export const getBooks = async () => {
    try {
        const response = await axios.get(BASE_URL + '/books');
        return response.data;
    } catch (err) {
        console.log('Error fetching books');
        console.log(err);
    }
}

export const createBook = async (book) => {
    try {
        const response = await axios.post(BASE_URL + '/books', {
            title: book.title,
            author: book.author
        });

        return response.data;
    } catch (err) {
        console.log('Error fetching books');
        console.log(err);
    }
}

export const updateBook = async (id, book) => {
    try {
        const response = await axios.put(BASE_URL + '/books/' + id, {
            title: book.title,
            author: book.author
        });

        return response.data;
    } catch (err) {
        console.log('Error fetching books');
        console.log(err);
    }
}

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(BASE_URL + '/books/' + id);

        return response.data;
    } catch (err) {
        console.log('Error fetching books');
        console.log(err);
    }
}

