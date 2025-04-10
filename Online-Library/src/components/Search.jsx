import { useState } from "react";

function Search({ booksData, filterFunction }) {
  const [searchText, setSearchText] = useState("");

  function handleSearch(e) {
    const text = e.target.value;
    setSearchText(text);

    // Filter books by Title or Author dynamically
    const filteredBooks = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        book.author.toLowerCase().includes(text.toLowerCase())
    );

    filterFunction(filteredBooks);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold text-white mb-4">🔍 Search Books</h2>
      <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-md shadow-lg">
        <input
          type="text"
          className="w-full bg-transparent text-white px-4 py-2 focus:outline-none"
          placeholder="Search by title or author..."
          value={searchText}
          onChange={handleSearch}
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;