import React, { useState } from "react";
import api from "../../utils/api";
import { Card as CardMUI } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ListItemText from "@mui/material/ListItemText";
import style from "./index.module.css";
import CommentIcon from '@mui/icons-material/Comment'
import dayjs from 'dayjs'



export const Card = ({ itemPost, isInFavorites, setFavorites }) => {
  const [newLike, setNewLike] = useState(itemPost.likes.length);

  const writeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || [];
    storage.push(value);

    localStorage.setItem(key, JSON.stringify(storage));
  };

  const removeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key));
    const filteredStorage = storage.filter((itemID) => value !== itemID);
    localStorage.setItem(key, JSON.stringify(filteredStorage));
  };

  const addFavorite = () => {
    writeLS("favorites", itemPost._id);
    setFavorites((prevState) => [...prevState, itemPost._id]);

    api
      .addLike(itemPost._id)
      .then((addedItem) => {
        setNewLike(addedItem.likes.length);
      })
      .catch(() => {
        alert("Не удалось поставить лайк");
      });
  };

  const removeFavorite = () => {
    removeLS("favorites", itemPost._id);
    setFavorites((prevState) =>
      prevState.filter((itemID) => itemPost._id !== itemID)
    );
    api
      .deleteLike(itemPost._id)
      .then((removedItem) => {
        setNewLike(removedItem.likes.length);
      })
      .catch(() => {
        alert("Не удалось удалить лайк");
      });
  };

  return (
    <CardMUI sx={{ height: 600, width: 350, margin: 4 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={itemPost.author?.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="body1">{itemPost.author?.name}</Typography>
          }
          secondary={
            <Typography variant="body2">{itemPost.author?.about}</Typography>
          }
        />
      </ListItem>
      <ListItem>
        <img
          style={{
            maxHeight: 300,
            maxWidth: 300,
            
          }}
          src={itemPost?.image}
          alt="picture"
        />
      </ListItem>

      <ListItem sx={{ alignItems: "flex-start" }}>
        <p className={style.p}> {itemPost.text}</p>
      </ListItem>
      <ListItem>
        <Typography gutterBottom variant="body2" component="div">
          Tags:
          {itemPost.tags.map((item, i) => (
            <span key={i} className={style.tags}>
              {item}
            </span>
          ))}
        </Typography>
      </ListItem>

      <ListItem>
        {isInFavorites ? (
          <IconButton aria-label="add to favorites" onClick={removeFavorite}>
            <FavoriteIcon sx={{ color: pink[300] }} />
            <Typography gutterBottom variant="body2" component="div">
              {newLike}
            </Typography>
          </IconButton>
        ) : (
          <IconButton aria-label="add to favorites" onClick={addFavorite}>
            <FavoriteBorderOutlinedIcon />
            <Typography gutterBottom variant="body2" component="div">
              {newLike}
            </Typography>
          </IconButton>
        )}
         {itemPost.comments.length > 0 && (
                    <>
                        <CommentIcon fontSize='small' sx={{ ml: 1 }} color='disabled' />
                        <ListItemText secondary={itemPost.comments.length} />
                    </>
                )}

                <ListItemText secondary={dayjs(itemPost.created_at).format('DD.MM.YYYY')} sx={{ ml: 1 }} />
      </ListItem>
    </CardMUI>
  );
};
