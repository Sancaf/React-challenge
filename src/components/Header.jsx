import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContextProvider'

const Header = () => {
  const { setSearchType, setSearchQuery } = useContext(SearchContext)

  const handleClick = (filter) => {
    setSearchType(filter)
    setSearchQuery('')
  }
  return (
    <Container>
      <Logo onClick={() => handleClick('discover')}>
        <Link to="/">DiscoverMovies</Link>
      </Logo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #0d253f;
  height: 5em;
  padding: 0 1rem;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #90cea1;
  margin-right: auto;
  cursor: pointer;
`

export default Header
