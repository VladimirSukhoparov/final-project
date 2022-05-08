import React, { useEffect } from 'react'
import { Card } from '../Card'
import './index.css'
import { useApi } from '../../hooks/useApi'

export const List = ({ list,changeList, favorites, setFavorites,user }) => {
    const api=useApi()
    useEffect(() => {
                  api.getPosts()
              .then((list) => {
                  const listFinal=[];
              for (let i=list.length-1; i>=0; i--){
                  listFinal.push(list[i])
              }
              changeList(listFinal)}
              )
              .catch((err) => alert(err))
      }, [])
    return (
        <div className='cards'>
            {list?.map((item) => (
                <Card key={item._id} changeList={changeList} user={user} itemPost={item} isInFavorites={favorites.includes(item._id)} setFavorites={setFavorites} />
            ))}
        </div>
    )
}
