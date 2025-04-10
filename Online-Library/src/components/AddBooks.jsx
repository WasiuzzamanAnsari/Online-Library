import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/booksSlice";

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [error, setError] = useState("");

  // Form validation
  const validateForm = () => {
    if (!title || !author || !description || !pages || !rating || !coverImage) {
      setError("All fields are required!");
      return false;
    }
    if (isNaN(pages) || isNaN(rating)) {
      setError("Pages and rating must be numeric.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Create a new book object
      const newBook = {
        id: Date.now(),
        title,
        author,
        description,
        pages,
        rating,
        coverImage,
      };

      dispatch(addBook(newBook));
      navigate("/browsebook");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">📚 Add a New Book</h1>

        {/* Error Message */}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-semibold">Title:</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-semibold">Author:</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold">Description:</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Pages */}
          <div>
            <label className="block font-semibold">Pages:</label>
            <input
              type="number"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold">Rating:</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block font-semibold">Cover Image URL:</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-semibold shadow-md hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
             Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;