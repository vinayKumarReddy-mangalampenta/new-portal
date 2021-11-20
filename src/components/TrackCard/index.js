import {Link} from 'react-router-dom'

import './index.css'

const TrackCard = props => {
  const {trackCard} = props
  const {trackName, description, trackImage} = trackCard
  return (
    <div className="track-list-item shadow-sm">
      <Link
        className="track-link"
        to={`/track/${trackName.toLowerCase().split(' ').join('-')}`}
      >
        <div className="image-container">
          <img src={trackImage} alt={trackName} className="track-image" />
        </div>
        <div className="progress-bar-container">
          <span className="progress-bar"> </span>
        </div>
        <div className="card-body details">
          <h1 className="track-title">{trackName}</h1>
          <p className="description">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default TrackCard
