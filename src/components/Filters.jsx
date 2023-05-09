import styled from 'styled-components'
import { SearchContext } from '../context/SearchContextProvider'
import { useContext } from 'react'

function Filters() {
  const {
    setSearchType,
    setStartDate,
    setEndDate,
    searchType,
    setSearchQuery,
  } = useContext(SearchContext)

  const handleFilterChange = (filter) => {
    searchType === filter ? setSearchType('discover') : setSearchType(filter)
    setSearchQuery('')
  }

  return (
    <>
      <FilterButton
        isActive={searchType === 'popularity'}
        onClick={() => handleFilterChange('popularity')}
      >
        Popularity
      </FilterButton>
      <FilterButton
        isActive={searchType === 'votes'}
        onClick={() => handleFilterChange('votes')}
      >
        Votes
      </FilterButton>
      <FilterButton
        isActive={searchType === 'date'}
        onClick={() => handleFilterChange('date')}
      >
        Date
      </FilterButton>
      {searchType === 'date' && (
        <FilterDateContainer>
          <FilterInput
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <FilterInput
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FilterDateContainer>
      )}
    </>
  )
}

const FilterButton = styled.button`
  background-color: ${(props) => (props.isActive ? '#01b4e4' : '#fff')};
  border: none;
  border-radius: 0.25em;
  color: ${(props) => (props.isActive ? '#fff' : '#0d253f')};
  cursor: pointer;
  font-size: 1em;
  margin-right: 0.5em;
  padding: 0.5em 1em;

  &:hover {
    scale: ${(props) => (props.isActive ? '1' : '1.05')};
    transition: all 0.2s ease-in-out;
  }
`

const FilterInput = styled.input`
  border: none;
  border-radius: 0.25em;
  font-size: 0.9em;
  margin-right: 0.5em;
  padding: 0.5em 1em;
`

const FilterDateContainer = styled.div`
  display: flex;
  gap: 0.5em;
  margin-left: 0.5em;
`

export default Filters
