import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Logo>DiscoverMovies</Logo>
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
