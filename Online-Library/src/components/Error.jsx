import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError() || { status: "404", statusText: "Page Not Found", data: "Oops! The page you are looking for doesn't exist." };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-500">Oops!!</h1>
        <h2 className="text-3xl font-semibold mt-4">{err.status} - {err.statusText}</h2>
        <p className="text-lg text-gray-600 mt-2">{err.data || "Something went wrong. Please try again later."}</p>

        <Link
          to="/"
          className="mt-6 inline-block bg-amber-500 text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md 
                    hover:bg-amber-600 hover:scale-105 transition-all duration-300"
        >
          🔙 Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;