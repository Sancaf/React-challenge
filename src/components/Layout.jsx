import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import Filters from './Filters'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Main>
          <FilterContainer
            style={{
              display: pathname === '/Movie-selections' ? 'none' : 'flex',
            }}
          >
            <FilterHeader>Filter by:</FilterHeader>
            <Filters />
            <SearchBar />
          </FilterContainer>

          <Outlet />
        </Main>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr 5fr;
`

const Main = styled.main`
  background: linear-gradient(to top, #0d253f, #01b4e4, #90cea1);
  min-height: 100%;
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
`

const FilterHeader = styled.h2`
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #01b4e4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.5em;
  margin-right: 1em;
`

export default Layout
