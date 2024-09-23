import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Footer from "./Footer";

const MindCart = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('/api?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      const mind = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      setCards(mind);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch('/api?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [ListOfRestaurants]);

  // Set 'load' when both cards and ListOfRestaurants are populated
  useEffect(() => {
    if (cards.length > 0 && ListOfRestaurants.length > 0) {
      setLoad(true); // Set 'load' true when both data sets are available
    }
  }, [cards, ListOfRestaurants]);

  const handleFilter = () => {
    const filteredList = ListOfRestaurants.filter((res) => {
      const rating = res?.info?.avgRating;
      return parseFloat(rating) > 4.4;
    });
    setFilteredRestaurants(filteredList);
  };

  const totalPages = Math.ceil(cards.length / itemsPerPage);
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
      <ul className="flex flex-wrap justify-center items-center gap-4">
  {currentItems.map((card) => (
    <li key={card.id} className="flex flex-col items-center">
      <img
        className="w-40 h-40 object-cover mb-2 hover:scale-110 transition-transform"
        src={CDN_URL + card.imageId}
        alt={card.accessibility.altText}
      />
    </li>
  ))}
</ul>


      {/* Pagination Controls */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
        >
          <GrLinkPrevious />
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
        >
          <GrLinkNext />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
           <div className="mb-40">
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
            </div>
          ))
        ) : (
          <p></p>
        )}
        
      </div>

      {/* Render Footer Conditionally */}
      {load ? <Footer /> :<Shimmer/>}
    </div>
  );
};

export default MindCart;
