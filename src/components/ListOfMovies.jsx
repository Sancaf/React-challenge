import { useQuery } from 'react-query'
import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import React from 'react'
import MovieModal from './MovieModal'
import { SearchContext } from '../context/SearchContextProvider'

function ListOfMovies() {
  const { searchQuery, searchType, setSearchType } = useContext(SearchContext)

  const API_KEY = 'ba282fc7777a85594b4d09bffedbb258'

  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=ba282fc7777a85594b4d09bffedbb258&query=${searchQuery}`
  /*  const popularity = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` */
  /*   const votes = `https://api.themoviedb.org/3/movie/top_votes?api_key=${API_KEY}` */

  useEffect(() => {
    setSearchType('textQuery')
  }, [searchQuery, setSearchType])

  const fetchData = async () => {
    console.log('searchType', searchType)
    const config = {
      popularity: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      votes: `https://api.themoviedb.org/3/movie/top_votes?api_key=${API_KEY}`,
      textQuery: API_URL,
    }
    const res = await fetch(config[searchType])
    return res.json()
  }

  const { isLoading, error, data } = useQuery('movies', fetchData, {
    refetchInterval: 1000,
  })

  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleCardClick = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <Deck>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data</div>}
      {data?.results?.map((movie) => (
        <Card key={movie.id} onClick={() => handleCardClick(movie)}>
          <Poster src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
          <CardContent>
            <Title>{movie.title}</Title>
          </CardContent>
        </Card>
      ))}
      {selectedMovie && (
        <MovieModal
          selectedMovie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </Deck>
  )
}

const Deck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 250px;
  cursor: pointer;
  &:hover {
    scale: 1.05;
    transition: 0.3s;
  }
`

const Poster = styled.img`
  object-fit: cover;
`

const CardContent = styled.div`
  padding: 0.5em;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 4px;
`

export default ListOfMovies
