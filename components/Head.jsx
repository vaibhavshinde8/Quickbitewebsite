import { useEffect, useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Error from "./Error";

const Head = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 4;

  const fetchData = async () => {
    try {
      const response = await fetch('/api?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      setTopRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      console.log("Top Restaurants:", data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
     <Error/>
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (topRestaurants.length === 0) {
    return <Shimmer />;
  }

  const nextPage = () => {
    if ((currentPage + 1) * imagesPerPage < topRestaurants.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentImages = topRestaurants.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  return ( 
    <div className="w-screen p-4 relative">
      <div className="text-center text-2xl font-bold mb-10 font-sans">
        Top restaurant chains in Nashik
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentImages.length ? currentImages.map((restaurant) => {
          const { cloudinaryImageId, name, aggregatedDiscountInfoV3 = {} } = restaurant.info;
          const { header = '', subHeader = '' } = aggregatedDiscountInfoV3;

          return (
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              <li className="list-none flex flex-col items-center relative  justify-center h-full">
                <div className="relative">
                  <img
                    className="w-64 h-64 object-cover mb-2 rounded-lg hover:scale-110 transition-transform"
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                  />
                  {/* Discount badge for header */}
                  <div className="flex">
                    {aggregatedDiscountInfoV3.header && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        {aggregatedDiscountInfoV3.header}
                      </div>
                    )}
                    {aggregatedDiscountInfoV3.subHeader && (
                      <div className="absolute top-2 left-20 bg-green-500 bg-opacity-60 text-white px-2 py-1 rounded-lg text-xs">
                        {aggregatedDiscountInfoV3.subHeader}
                      </div>
                    )}
                  </div>
                </div>
                <p className="font-bold my-18 "> {name}</p>
              </li>
            </Link>
          );
        }) : <Shimmer/>}
      </div>
      <div className="absolute top-0 right-5  space-x-2 mt-2 mr-4">
        <button onClick={prevPage} disabled={currentPage === 0}>
          <GrLinkPrevious />
        </button>
        <button onClick={nextPage} disabled={currentPage >= topRestaurants.length / imagesPerPage}>
          <GrLinkNext />
        </button>
      </div>
     
    </div>
  );
};

export default Head;
