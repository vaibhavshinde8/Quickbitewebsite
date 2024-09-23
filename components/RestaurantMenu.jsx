import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpperCards from "./UpperCards";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerRestaurantCategory from "./ShimmerRestaurantCategory ";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();  // Get restaurant ID from URL params
    const [showIndex, setShowIndex] = useState(null);  // Track which category is shown

    // Fetch the restaurant menu when component mounts or resId changes
    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
            const apiUrl = `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}`;
            //console.log("Fetching URL:", apiUrl);
    
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
    
            const json = await response.json();
            console.log("Fetched Menu Data:", json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
    

    // Render loading state if menu data is not yet fetched
    if (!resInfo || !resInfo.cards) {
        return <ShimmerRestaurantCategory/>
    }

    // Extract restaurant info and categories
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // Render message if no categories are found
    if (!categories || categories.length === 0) {
        return <div>No categories found</div>;
    }

    return (
        <div className="text-center ">
            {/* Render the upper cards (possibly restaurant info) */}
            <UpperCards />

            {/* Map over the categories and render each category */}
            {categories.map((category, index) => (
                
                <RestaurantCategory
                
                    key={category.card.card.id}
                    data={category.card.card}
                    showItems={showIndex === index}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
