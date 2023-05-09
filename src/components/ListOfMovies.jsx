import { useInfiniteQuery } from 'react-query'
import { useState, useContext } from 'react'
import styled from 'styled-components'
import React from 'react'
import MovieModal from './MovieModal'
import { SearchContext } from '../context/SearchContextProvider'
import { useInView } from 'react-intersection-observer'

function ListOfMovies() {
  const { searchQuery, searchType, startDate, endDate } =
    useContext(SearchContext)

  const API_URL = `https://api.themoviedb.org/3/`
  const API_KEY = 'ba282fc7777a85594b4d09bffedbb258'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'

  const favorites = Object.values(
    JSON.parse(localStorage.getItem('favorites') || '{}')
  )

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['movies', searchType, startDate, endDate, searchQuery],
      async ({ pageParam = 1 }) => {
        const config = {
          discover: `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${pageParam}`,
          popularity: `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&page=${pageParam}`,
          votes: `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&language=en-US&page=${pageParam}`,
          date: `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${pageParam}&release_date.gte=${startDate}&release_date.lte=${endDate}`,
          textQuery: `${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${pageParam}`,
        }
        const path = config[searchType]
        if (!path) return

        const res = await fetch(path)
        const data = await res.json()
        return {
          nextPage: data.page + 1,
          totalPages: data.total_pages,
          results: data.results,
        }
      },
      {
        getNextPageParam: (lastPage) => {
          if (
            !lastPage ||
            !lastPage.nextPage ||
            lastPage.nextPage > lastPage.totalPages
          ) {
            return undefined
          }
          return lastPage.nextPage
        },
      }
    )

  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleCardClick = (movie) => {
    setSelectedMovie(movie)
  }

  const movies =
    searchType === 'favourites'
      ? favorites
      : data?.pages?.flatMap((page) => page.results) || []

  const { ref, inView } = useInView({
    threshold: 0,
  })

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])
  return (
    <Deck>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching data</div>}
      {movies.map((movie) => (
        <Card key={movie.id} onClick={() => handleCardClick(movie)}>
          <Poster src={IMAGE_PATH + movie.poster_path} alt={movie.title} />
          <CardContent>
            <Title>{movie.title}</Title>
          </CardContent>
        </Card>
      ))}
      <div ref={ref} />
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
