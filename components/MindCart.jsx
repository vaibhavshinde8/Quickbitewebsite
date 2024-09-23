import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";

const MindCart = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
  const itemsPerPage = 6; // Number of items per page

  const fetchData = async () => {
    try {
      const response = await fetch('/api?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      console.log(data);
      const mind = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      console.log("mind cards", mind);
      setCards(mind);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Get current set of items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold text-center">What's on your mind?</h1>

      {/* Display Images */}
      <ul className="flex flex-row space-y-4 justify-around ml-28 mr-28">
        {currentItems.map((card) => (
          <li key={card.id} className="flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover mb-2"
              src={CDN_URL + card.imageId}
              alt={card.accessibility.altText}
            />
            <a href={CDN_URL + card.action.link} className="text-blue-500 underline">
              {card.action.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="absolute top-0 right-0 mt-4 mr-4 flex flex-col space-y-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default MindCart;
