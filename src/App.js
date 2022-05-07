import React, { useState, useEffect } from "react";
import api from "./utils/api";
import PaginationRounded from "./components/Pagination/Pagination";
import "./index.css";
import { List } from "./components/List";
import ModalContext from "./contexts/modalContext";
import { Route, Routes } from "react-router-dom";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  const [postList, setPostList] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [modalState, setModalState] = useState({
    isOpen: false,
    msg: null,
  });

  const [user, setUser] = useState(null);
  useEffect(() => {
    api
      .getInfoUser()
      .then((user) => setUser(user))
      .catch((err) => alert(err));
  }, []);

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
    <ModalContext.Provider value={{ modalState, setModalState }}>
      <div className="appContainer">
      <Header></Header>
        <div className="content container">
          
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />
            <Route
              path="posts/:itemID"
              element={<Post user={user?._id} changeList={setPostList} />}
            />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </ModalContext.Provider>
  );
};
