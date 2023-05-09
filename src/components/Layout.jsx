import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from './SearchBar'

import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />

      <Container>
        <Sidebar />
        <Main>
          <SearchBar />
          <Outlet />
        </Main>
      </Container>
    </>
  )
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
`
const Main = styled.main`
  padding-top: 1em;
  background: linear-gradient(to top, #0d253f, #01b4e4, #90cea1);
`
export default Layout
