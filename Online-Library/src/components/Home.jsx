import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500 animate-gradient-x flex flex-col items-center justify-center text-white relative">
      
      {/* Overlay for Subtle Blur Effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-10 w-full">
        {/* Welcome Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-bounce">
          📚 Your Gateway to Infinite Stories
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-100 mt-4 max-w-2xl mx-auto px-2">
          Unlock endless adventures—your next favorite book awaits!
        </p>

        {/* Categories Section */}
        <div className="mt-10 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 mb-6">📂 Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["Fiction", "Non-Fiction", "Science", "History"].map((category) => (
              <Link
                to={`/books/category/${category.toLowerCase()}`}
                key={category}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 text-white text-sm sm:text-base font-bold rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Books Section */}
        <div className="mt-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-200 mb-6">🔥 Trending Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { id: 14, title: "Becoming", author: "Michelle Obama", img: "https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF1000,1000_QL80_.jpg" },
              { id: 9, title: "Moby-Dick", author: "Herman Melville", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/800px-Moby-Dick_FE_title_page.jpg" },
              { id: 3, title: "Tom Jones", author: "Henry Fielding", img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/TomJonesTitle.png"},
              { id: 5, title: "Le Rouge et le Noir", author: "Stendhal (Henri Beyle)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/StendhalRedandBlack04.jpg/440px-StendhalRedandBlack04.jpg" }
            ].map((book) => (
              <div 
                key={book.id} 
                className="bg-white/10 p-4 sm:p-5 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <img src={book.img} alt={book.title} className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 shadow-md" />
                <h3 className="text-lg sm:text-xl font-bold text-white">{book.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base">{book.author}</p>
                <Link to={`/books/${book.id}`}>
                  <button className="mt-3 w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500 text-white font-bold text-sm sm:text-base px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300">
                    View More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
