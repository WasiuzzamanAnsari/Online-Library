import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Books } from "../utils/mockdata";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";

function BrowseBook() {
  const { category } = useParams();
  const booksFromStore = useSelector((state) => state.books.books);
  const allBooks = [...Books, ...booksFromStore];

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (category) {
        const formattedCategory = category.replace("-", " ").toLowerCase();
        const filteredData = allBooks.filter(
          (book) => book.category.toLowerCase() === formattedCategory
        );
        setFilteredBooks(filteredData);
      } else {
        setFilteredBooks(allBooks);
      }
      setLoading(false);
    }, 500);
  }, [category, booksFromStore]);

  const filterBooks = (filteredData) => {
    setFilteredBooks(filteredData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
      {/* Category Filter */}
      <CategoryFilter />

      {/* Search Bar */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <Search booksData={allBooks} filterFunction={filterBooks} />
      </div>

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-10 sm:mt-14 mb-8 text-white">
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Books`
          : "Explore Our Library"}
      </h1>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}

      {/* Book Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 px-2 sm:px-4 md:px-8 lg:px-0">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Book Cover */}
                <div className="relative overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/books/${book.id}`}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold 
                        shadow-md hover:from-pink-500 hover:to-purple-500 hover:shadow-lg transform hover:scale-105 
                        transition-all duration-300 ease-in-out text-sm sm:text-base"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Book Details */}
                <div className="p-4 text-center">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    By {book.author}
                  </p>
                  <span className="inline-block mt-3 bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">
                    {book.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-400 col-span-full">
              No books found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default BrowseBook;
