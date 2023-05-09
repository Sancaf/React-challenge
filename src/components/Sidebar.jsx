import styled from 'styled-components'
import { SearchContext } from '../context/SearchContextProvider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const { setSearchType } = useContext(SearchContext)

  return (
    <Container>
      <FilterTitle>All Movies</FilterTitle>
      <FilterList>
        <FilterItem onClick={() => setSearchType('discover')}>
          <Link to="/">Discover</Link>
        </FilterItem>
      </FilterList>
      <FilterTitle>Movie selection</FilterTitle>
      <FilterList>
        <FilterItem onClick={() => setSearchType('favourites')}>
          <Link to="/Movie-selections"> My List</Link>
        </FilterItem>
      </FilterList>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #0d253f;
  gap: 0.5em;
  color: #fff;
  padding: 1rem;
  height: 100%;
`

const FilterTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const FilterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const FilterItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #01b4e4;
  }
`

export default Sidebar
