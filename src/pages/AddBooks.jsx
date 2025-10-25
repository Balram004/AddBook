import React, { useState } from "react";

const AddBooks = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get existing books from localStorage, or initialize an empty array
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    // Add the new book
    savedBooks.push(book);
    // Save back to localStorage
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));

    console.log("Adding book:", book);
    alert(`Book "${book.title}" added successfully!`);
    // Reset form
    setBook({ title: "", author: "", genre: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-4 rounded focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-4 rounded focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-6 rounded focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;