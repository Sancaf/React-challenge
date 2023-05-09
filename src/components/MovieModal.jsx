import styled from 'styled-components'
import { RiMenuAddLine } from 'react-icons/ri'

function MovieModal({ selectedMovie, onClose }) {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500'

  const handleAddToFavorites = () => {
    alert(`${selectedMovie.title} agregada a favoritos!`)

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const newFavorites = [...favorites, selectedMovie]
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <Wrapper>
      <Backdrop onClick={onClose} />
      <Modal>
        <Header>
          <Title>{selectedMovie.title}</Title>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Content>
          <Poster
            src={IMAGE_PATH + selectedMovie.poster_path}
            alt={selectedMovie.title}
          />
          <Details>
            <p>{selectedMovie.overview}</p>
            <p>Release Date: {selectedMovie.release_date}</p>
            <p>Rating: {selectedMovie.vote_average}</p>
            <AddToFavoritesButton onClick={handleAddToFavorites}>
              <RiMenuAddLine />
              <ButtonText>Agregar a favoritos</ButtonText>
            </AddToFavoritesButton>
          </Details>
        </Content>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const Modal = styled.div`
  position: relative;
  background-color: #0d253f;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 70%;
  max-width: 700px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #01b4e4;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #fff;
`

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
`

const Content = styled.div`
  display: flex;

  padding: 1em;
`

const Poster = styled.img`
  object-fit: cover;
  border-radius: 8px;
  height: 25em;
`
const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  color: #fff;
`
const Details = styled.div`
  padding: 1em;
  line-height: 1.5;
  color: #fff;
  text-align: left;

  p {
    margin-bottom: 1em;
    font-size: 16px;
  }

  p:first-of-type {
    font-weight: bold;
  }
`
const AddToFavoritesButton = styled.button`
  background-color: ${({ isFavorite }) => (isFavorite ? '#90cea1' : '#01b4e4')};
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isFavorite }) =>
      isFavorite ? '#7db78f' : '#00a3c4'};
  }
`
export default MovieModal
