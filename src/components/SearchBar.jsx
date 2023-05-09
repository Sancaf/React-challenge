import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContextProvider'

function SearchBar() {
  const { setSearchQuery, setSearchType, searchQuery } =
    useContext(SearchContext)

  const handleSearch = (value) => {
    if (value.length === 0) {
      setSearchType('discover')
      setSearchQuery(value)
    } else {
      setSearchType('textQuery')
      setSearchQuery(value)
    }
  }
  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onBlur={() => setSearchQuery('')}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  width: 35%;
  margin-left: auto;
  margin-right: 1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 40px;
`

const SearchBarInput = styled.input`
  width: 100%;
  height: 30px;

  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 1em;
  outline: none;
  background-color: #fff;
  color: #0d253f;
`
export default SearchBar
