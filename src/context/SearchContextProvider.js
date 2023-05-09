import { createContext, useState } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
  const currentDate = new Date().toISOString().slice(0, 10)

  const [searchQuery, setSearchQuery] = useState('')
  const [startDate, setStartDate] = useState(currentDate)
  const [endDate, setEndDate] = useState(currentDate)
  const [searchType, setSearchType] = useState('discover')

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchType,
        setSearchType,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
