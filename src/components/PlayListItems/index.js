import {RiDeleteBin7Line} from 'react-icons/ri'

import './index.css'

const PlayListItems = props => {
  const {PlayListItemDetails, onDeletePlaylist} = props
  const {id, imageUrl, name, genre, duration} = PlayListItemDetails
  const deletePlaylist = () => onDeletePlaylist(id)
  return (
    <li className="list-element">
      <div className="image-name-genre-container">
        <img className="playlist-image" alt="track" src={imageUrl} />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-duration-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={deletePlaylist}
        >
          <RiDeleteBin7Line className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default PlayListItems
