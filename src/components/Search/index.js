import React, { useEffect, useState, useContext } from 'react'
import './index.css'
import api from '../../utils/api'
import ModalContext from '../../contexts/modalContext'

export const Search = ({ setPostList }) => {
    const [searchText, setSearchText] = useState('')
    const { setModalState } = useContext(ModalContext)

    useEffect(() => {
        api.getPosts()
            .then((list) => setPostList(list.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))))
            .catch((err) => 
                setModalState(() => {
                    return {
                        isOpen: true,
                        msg: err,
                    }
                })
            )
    }, [searchText])

    return (
        <div className='search'>
            <input type='text' placeholder='Поиск по названию поста' className='search__input' onChange={(event) => setSearchText(event.target.value)} />
        </div>
    )
}
