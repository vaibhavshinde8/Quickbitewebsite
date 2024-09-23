import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
const useRetrauntMenu=(resId)=>{
//fetch data

const [resInfo,setResInfo]=useState(null);

useEffect(()=>{
    fetchData();
},[]);

const fetchData=async()=>{
    try {
        const response = await fetch("/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId="+resId);
        const json = await response.json();
        console.log(json);
       
    } catch (error) {
        console.error("Failed to fetch menu:", error);
    }
}
setResInfo(resInfo);


    return resInfo;
}

export default useRetrauntMenu;