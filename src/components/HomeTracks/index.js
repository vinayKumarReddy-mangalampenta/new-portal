import {Component} from 'react'
import TrackCard from '../TrackCard'

import './index.css'

class HomeTracks extends Component {
  state = {tracks: []}

  componentDidMount() {
    this.getTracksData()
  }

  getTracksData = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://ccbp-server.herokuapp.com/tracks',
      options,
    )
    const tracks = await response.json()
    console.log(tracks)
    this.setState({tracks})
  }

  renderIdpTracks = () => {
    const {tracks} = this.state
    const idpTracks = tracks.filter(each => each.idpTrack === 'true')

    return (
      <ul className="idp-tracks">
        {idpTracks.map(each => (
          <TrackCard key={each.trackId} trackCard={each} />
        ))}
      </ul>
    )
  }

  renderTracks = name => {
    const {tracks} = this.state
    const tracksGroups = tracks.filter(each => each.trackGroup === name)

    return (
      <ul className="idp-tracks">
        {tracksGroups.map(each => (
          <TrackCard key={each.trackId} trackCard={each} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <div className="tracks-container">
          <h1 className="track-group-heading">Tracks in your idp</h1>
          {this.renderIdpTracks()}
        </div>
        <div className=" tracks-container">
          <h1 className="track-group-heading">
            EXPONENTIAL PERFORMANCE MINDSET 4.0
          </h1>
          {this.renderTracks('EXPONENTIAL PERFORMANCE MINDSET 4.0')}
        </div>
        <div className="tracks-container">
          <h1 className="track-group-heading">community</h1>
          {this.renderTracks('COMMUNITY')}
        </div>
      </div>
    )
  }
}

export default HomeTracks
