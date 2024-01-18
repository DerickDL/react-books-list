# Book List App

Welcome to the Book List App! This React application allows users to manage a list of books, including the ability to add, update, and delete book entries.

![Alt text](https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.15752-9/416086601_782516140381187_8469330128639484619_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=dc32xoa0cmIAX-yZJ7U&_nc_ht=scontent.fmnl8-1.fna&oh=03_AdTGcK91LjNW-R2xFwIMn81BK2eMx22PI_k-1kswyYjtcA&oe=65D071A8)

## Features

- Add a new book with title and author/s information.
- Update existing book details.
- Delete books from the list.

## Upcoming Features

- Attach images to book entries.
- Add additional details such as description, notes, current page, and review for each book.
- Implement a search feature to quickly find specific books.
- Enable sorting options for the book list.
- Introduce tags to categorize books by genres.

## Technologies Used

- React
- Vite
- Context API
- json-server
- Axios

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/book-list-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd book-list-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

This will launch your app locally at [http://localhost:3000](http://localhost:3000).

### Setting up json-server

The app uses json-server as a mock backend. Follow these steps to set it up:

1. Start json server:

    ```bash
    npm run server
    ```


This will start json-server at [http://localhost:3001](http://localhost:3001) using the data from the `db.json` file.

### Build

To build the project for production:

```bash
npm run build
```

## Preview

