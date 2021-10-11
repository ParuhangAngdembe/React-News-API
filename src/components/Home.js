import React, { useEffect, useState } from "react";
import { API_URL } from "../url/ApiUrl";
import NewsCard from "./NewsCard";
function Home() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [HomeData, setHomeData] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(API_URL);
    // console.log(data);
    const items = await data.json();
    // console.log(items);
    setHomeData(items);
  };
  return (
    <div className="Main">
      <NewsCard articles={HomeData.articles} />
    </div>
  );
}

export default Home;
