import { Link, useLocation } from "react-router-dom";

function CategoryFilter() {
  const location = useLocation();

  const categories = [
    { name: "Fiction", path: "fiction" },
    { name: "Non-Fiction", path: "non_fiction" },
    { name: "Science", path: "science" },
    { name: "History", path: "history" },
  ];

  return (
    <div className="category-filter flex flex-col items-center mt-8 sm:mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
        Browse by Category
      </h2>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-2 sm:px-4 pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={`/books/category/${category.path}`}
            className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300
              ${
                location.pathname.includes(category.path)
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
