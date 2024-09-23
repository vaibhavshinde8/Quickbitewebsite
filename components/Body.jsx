import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Head from "./Head";
import { FaSearch } from "react-icons/fa";
import withOpenOrNot from "./withOpenOrNot"; // Ensure this is correctly exported and imported
import Footer from "./Footer";
import OfflineDetector from "./OfflineDetector";
import { proxyUrl } from "../utils/constant";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const RestaurantCardOpen = withOpenOrNot(RestaurantCard);

  const fetchData = async () => {
    try {
      const response = await fetch('/api?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with all restaurants
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <OfflineDetector />;

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  // Filter restaurants based on searchText
  const handleSearch = (text) => {
    const filteredList = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  // Sorting functions
  const sortByDeliveryTime = () => {
    const sortedList = [...filteredRestaurants].sort((a, b) => {
      const timeA = a?.info?.deliveryTime ?? Number.MAX_VALUE;
      const timeB = b?.info?.deliveryTime ?? Number.MAX_VALUE;
      return timeA - timeB;
    });
    setFilteredRestaurants(sortedList);
  };

  const sortByRating = () => {
    const sortedList = [...filteredRestaurants].sort((a, b) => {
      const ratingA = parseFloat(a?.info?.avgRating ?? 0);
      const ratingB = parseFloat(b?.info?.avgRating ?? 0);
      return ratingB - ratingA;
    });
    setFilteredRestaurants(sortedList);
  };

  const sortByCostLowToHigh = () => {
    const sortedList = [...filteredRestaurants].sort((a, b) => {
      const costA = a?.info?.costForTwo ?? 0;
      const costB = b?.info?.costForTwo ?? 0;
      return costA - costB;
    });
    setFilteredRestaurants(sortedList);
  };

  const sortByCostHighToLow = () => {
    const sortedList = [...filteredRestaurants].sort((a, b) => {
      const costA = a?.info?.costForTwo ?? 0;
      const costB = b?.info?.costForTwo ?? 0;
      return costB - costA;
    });
    setFilteredRestaurants(sortedList);
  };

  return (
    <div className="body flex flex-col justify-center h-full">
      <Head />
      <div className="flex items-center px-4 py-2 mb-10 mt-10 ml-20 mr-20">
        <label className="relative block">
          <span className="sr-only">Search Restaurant</span>
          <input
            className="placeholder:italic placeholder:text-gray-400 text-gray-900 ml-5 bg-white hover:bg-gray-100 border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-black focus:ring-1 focus:ring-black-500 sm:text-sm"
            placeholder="Search for Restaurants..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch(e.target.value); // Filter results on every keystroke
            }}
          />
        </label>

        <button
          className="text-gray-900 ml-5 bg-white hover:bg-gray-100 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-white dark:hover:bg-gray-200 mr-2 mb-2 border-black"
          onClick={() => handleSearch(searchText)} // Search on button click
        >
          <FaSearch className="mr-2" /> Search
        </button>

        <div className="filter w-[60%] flex  gap-10 rounded-lg px-1 justify-around">
        {/* Sort by Delivery Time */}
        <button
          className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10"
          onClick={() => {
            const sortedList = [...listOfRestaurants].sort((a, b) => {
              const timeA = a?.info?.deliveryTime ?? Number.MAX_VALUE;
              const timeB = b?.info?.deliveryTime ?? Number.MAX_VALUE;
              return timeA - timeB;
            });
            setFilteredRestaurants(sortedList);
          }}
        >
          Delivery Time
        </button>

        {/* Sort by Rating */}
        <button
          className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10"
          onClick={() => {
            const sortedList = [...listOfRestaurants].sort((a, b) => {
              const ratingA = parseFloat(a?.info?.avgRating ?? 0);
              const ratingB = parseFloat(b?.info?.avgRating ?? 0);
              return ratingB - ratingA;
            });
            setFilteredRestaurants(sortedList);
          }}
        >
          Rating
        </button>

        {/* Sort by Cost: Low to High */}
        <button
          className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10"
          onClick={() => {
            const sortedList = [...listOfRestaurants].sort((a, b) => {
              const costA = a?.info?.costForTwo ?? 0;
              const costB = b?.info?.costForTwo ?? 0;
              return costA - costB;
            });
            setFilteredRestaurants(sortedList);
          }}
        >
          Cost: Low to High
        </button>

        {/* Sort by Cost: High to Low */}
        <button
          className="filter-btn font-semibold text-lg text-gray-800 p-2 rounded-md hover:bg-black/10"
          onClick={() => {
            const sortedList = [...listOfRestaurants].sort((a, b) => {
              const costA = a?.info?.costForTwo ?? 0;
              const costB = b?.info?.costForTwo ?? 0;
              return costB - costA;
            });
            setFilteredRestaurants(sortedList);
          }}
        >
          Cost: High to Low
        </button>
      </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 p-2">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div className="mb-40" key={restaurant.info.id}> {/* Add margin here */}
              <Link to={`/restaurants/${restaurant.info.id}`}>
                {restaurant?.info?.isOpen ? (
                  <RestaurantCardOpen resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            </div>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Body;
