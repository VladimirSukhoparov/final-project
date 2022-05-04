import React, { useState, useEffect } from "react";
import api from "./utils/api";
import PaginationRounded from "./components/Pagination/Pagination";
import "./index.css";
import { List } from "./components/List";


  

export const App = () => {
  const [postList, setPostList] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    api
      .getPosts()
      .then((res) => setPostList(res))
      .catch((err) => alert(err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    
      <div className="appContainer">
        <List
          list={currentPosts}
          favorites={favorites}
          setFavorites={setFavorites}
        />
        <PaginationRounded
          postsPerPage={postsPerPage}
          totalPosts={postList.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    
  );
};
