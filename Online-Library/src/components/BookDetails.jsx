import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Books } from "../utils/mockdata";

function BookDetails() {
    const params = useParams();
    const booksFromRedux = useSelector((state) => state.books.books);
    const allBooks = [...Books, ...booksFromRedux]; 
    const book = allBooks.find((book) => book.id == params.id);

    if (!book) {
        return <h1 className="text-2xl text-center text-gray-400 mt-20">📚 Book not found!</h1>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
            <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
                
                {/* Book Cover */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-64 h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Book Details */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-3xl font-extrabold mb-2 text-pink-400">{book.title}</h1>
                    <h2 className="text-xl font-medium text-gray-300 mb-3">✍️ {book.author}</h2>
                    <p className="text-gray-400 text-lg mb-4">{book.description}</p>
                    
                    <div className="text-gray-300 space-y-2">
                        <p><b>📖 Pages:</b> {book.pages}</p>
                        <p><b>⭐ Rating:</b> {book.rating}</p>
                    </div>

                    {/* Back Button */}
                    <Link to="/browsebook">
                        <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 
                            rounded-full font-semibold shadow-md hover:from-pink-500 hover:to-purple-500 hover:shadow-lg 
                            transform hover:scale-105 transition-all duration-300 ease-in-out">
                             Back to Browse
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default BookDetails;