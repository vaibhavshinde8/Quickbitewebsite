import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory"; // Assuming you will need this
import { AiFillStar } from "react-icons/ai";
import { MdOutlineTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import ShimmerRestaurantCategory from "./ShimmerRestaurantCategory ";

const UpperCards = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch("/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId="+ resId);
            const json = await response.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const offers = resInfo?.cards[2]?.card?.card?.offers; // Assuming offers are here

    if (!restaurantInfo) return <ShimmerRestaurantCategory />;

    const { name, cuisines, costForTwoMessage, areaName, avgRatingString, totalRatingsString ,cloudinaryImageId} = restaurantInfo ?? {};
    const { lastMileTravelString, deliveryTime } = restaurantInfo?.sla ?? {};

    return (
        <div className="main w-full flex flex-col justify-center items-center">
            <div className="mainBodyRestaurantMenu flex flex-col items-center w-[51%] max-[800px]:w-full max-[800px]:px-3">
                {/* Restaurant details */}
                <div className="firstresNameDetails flex justify-between w-full p-2">
                    <div className="left max-[800px]:w-[70%]">
                        <h1 className="name text-lg font-bold font-open max-[800px]:w-full">{name}</h1>
                        <p>{cuisines.join(", ")}</p>
                        <p>{areaName + " " + lastMileTravelString}</p>
                    </div>
                    {/* Ratings */}
                    <div className="w-24 h-24">
                        <img 
                        className="rounded-lg object-cover w-full h-full"  // Use w-full and h-full to take container size
                         src={CDN_URL + cloudinaryImageId} 
                        alt="" 
                        />
                        </div>
                    <div className="right max-[700px]:max-h-24 flex flex-col justify-around p-1 items-center border-[1px] border-gray-300 rounded-xl max-[800px]:w-[20%]">
                        <div className="rating font-bold text-green-700 flex justify-center items-center gap-[2px]">
                            <AiFillStar /> <span>{avgRatingString}</span>
                        </div>
                        
                        <div className="krating font-open text-[0.65rem] font-semibold text-gray-500">
                            <p>{totalRatingsString}</p>
                        </div>
                       
                    </div>
                </div>

                {/* Delivery time and cost */}
                <div className="secondTimeAndOffers flex flex-col w-full">
                    <div className="timeandprice w-full flex justify-start gap-5 p-3 max-[800px]:justify-around">
                        <div className="time flex items-center gap-2 font-open text-black/80 font-bold">
                            <MdOutlineTimelapse className="timeicon text-2xl" />
                            <span className="dtime font-[750]">{deliveryTime} MINS</span>
                        </div>
                        <div className="price flex items-center gap-2 font-open text-black/80">
                            <HiOutlineCurrencyRupee className="rupeeicon text-2xl font-thin" />
                            <span className="costmsg font-bold">{costForTwoMessage}</span>
                        </div>
                       
                    </div>

                    {/* Offers section */}
                    <div className="offers flex w-full justify-start gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden py-2 my-2 max-[700px]:my-0">
                    </div>

                    {/* Veg section */}
                    <div className="div pt-6">
                        {restaurantInfo?.veg && <div className="text-green-800 font-medium text-sm flex gap-3 justify-start items-center"><FaLeaf /><h1>PURE VEG</h1></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpperCards;
