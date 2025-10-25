import React, { useState, useEffect } from "react";

const SavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setSavedBooks(books);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">My Saved Books</h1>
      {savedBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedBooks.map((book, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-1">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-600">
                <strong>Genre:</strong> {book.genre}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg mt-10">You have no saved books yet. Go add some!</p>
      )}
    </div>
  );
};

export default SavedBooks;