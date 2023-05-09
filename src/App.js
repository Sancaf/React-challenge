import './App.css'
import ListOfMovies from './components/ListOfMovies'
import { QueryClient, QueryClientProvider } from 'react-query'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import styled from 'styled-components'
import SearchContextProvider from './context/SearchContextProvider'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <Header />
          <Container>
            <Sidebar />
            <Main>
              <SearchBar />
              <ListOfMovies />
            </Main>
          </Container>
        </SearchContextProvider>
      </QueryClientProvider>
    </div>
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
export default App
