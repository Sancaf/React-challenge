import { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('popularity')

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, searchType, setSearchType }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
