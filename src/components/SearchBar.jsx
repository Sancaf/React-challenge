import React from 'react'
import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../context/SearchContextProvider'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const { setSearchQuery } = useContext(SearchContext)

  useEffect(() => {
    setSearchQuery(searchTerm)
  }, [searchTerm, setSearchQuery])

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => e.target.value && setSearchTerm(e.target.value)}
      />
      <SearchBarButton>Search</SearchBarButton>
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 50%;
  height: 50px;
`

const SearchBarInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  color: #0d253f;
`

const SearchBarButton = styled.button`
  width: 5em;
  height: 2.4em;
  border-radius: 5px;
  border: none;
  background-color: #01b4e4;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #0d253f;
  }
`
export default SearchBar
