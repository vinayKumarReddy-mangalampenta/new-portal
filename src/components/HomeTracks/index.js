import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TrackCard from '../TrackCard'

class HomeTracks extends Component {
  state = {tracks: [], isLoading: true}

  componentDidMount() {
    this.getTracksData()
  }

  getTracksData = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch('/tracks', options)
    const tracks = await response.json()

    this.setState({tracks, isLoading: false})
  }

  renderIdpTracks = () => {
    const {tracks} = this.state
    const idpTracks = tracks.filter(each => each.idpTrack === 'true')

    return (
      <div className="idp-tracks ">
        {idpTracks.map(each => (
          <TrackCard key={each.trackId} trackCard={each} />
        ))}
      </div>
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
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="red" height={25} width={25} />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    )
  }
}

export default HomeTracks
