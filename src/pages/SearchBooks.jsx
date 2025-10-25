import React, { useState } from "react";

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&maxResults=12`
      );
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      const data = await response.json();
      setResults(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = (book) => {
    const bookData = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "N/A",
      genre: book.volumeInfo.categories ? book.volumeInfo.categories[0] : "General",
    };

    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    
    // Check if book already exists
    if (savedBooks.some(savedBook => savedBook.title === bookData.title)) {
      alert(`"${bookData.title}" is already in your library.`);
      return;
    }

    savedBooks.push(bookData);
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    alert(`"${bookData.title}" has been added to your library!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Search for Books Online</h1>
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, or ISBN..."
          className="w-full md:w-1/2 border px-4 py-2 rounded-l-md focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((book) => (
          <div key={book.id} className="bg-white text-black rounded-lg shadow-lg p-4 flex flex-col">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192.png?text=No+Image'}
              alt={book.volumeInfo.title}
              className="w-32 h-48 mx-auto mb-4 object-cover"
            />
            <h2 className="text-lg font-bold mb-2 flex-grow">{book.volumeInfo.title}</h2>
            <p className="text-gray-700 mb-2">
              by {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </p>
            <button
              onClick={() => handleAddBook(book)}
              className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            >
              Add to My Books
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;