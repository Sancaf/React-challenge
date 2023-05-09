import React from 'react'
import ListOfMovies from '../components/ListOfMovies'
import { SearchContext } from '../context/SearchContextProvider'
import { useContext } from 'react'

function UserList() {
  const { setSearchType } = useContext(SearchContext)
  setSearchType('favourites')

  return <ListOfMovies />
}

export default UserList
