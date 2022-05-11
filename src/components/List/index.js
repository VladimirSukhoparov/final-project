import React, { useEffect, useContext } from 'react'
import { Card } from '../Card'
import './index.css'
import { useApi } from '../../hooks/useApi'
import ModalContext from '../../contexts/modalContext'

export const List = ({ list,changeList, favorites, setFavorites,user , token}) => {
    const { setModalState } = useContext(ModalContext)
    const api=useApi()
    useEffect(() => {
        if(token){
                  api.getPosts()
              .then((list) => {
                  const listFinal=[];
              for (let i=list.length-1; i>=0; i--){
                  listFinal.push(list[i])
              }
              changeList(listFinal)}
              )
              .catch((err) => {
                setModalState(()=>{
                    return{
                        isOpen: true,
                        msg: err,
                    }
                })
              })}
      }, [])
    return (
        <div className='cards'>
            {list?.map((item) => (
                <Card key={item._id} changeList={changeList} user={user} itemPost={item} isInFavorites={favorites.includes(item._id)} setFavorites={setFavorites} />
            ))}
        </div>
    )
}
