import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import TrackCard from '../TrackCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class AllTracks extends Component {
  state = {tracks: [], isLoading: true}

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
    this.setState({tracks, isLoading: false})
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
      <>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="red" height={25} width={25} />
          </div>
        ) : (
          <div>
            <Navbar />

            <div className="all-tracks-container">
              <div className="tracks-container">
                <h1 className="track-group-heading">CCBP 4.0 FOUNDATIONS</h1>
                {this.renderTracks('CCBP 4.0 FOUNDATIONS')}
              </div>
              <div className="tracks-container">
                <h1 className="track-group-heading">4.0 FUNDAMENTALS</h1>
                {this.renderTracks('4.O FUNDAMENTALS')}
              </div>
              <div className="tracks-container">
                <h1 className="track-group-heading">
                  EXPONENTIAL PERFORMANCE MINDSET 4.0
                </h1>
                {this.renderTracks('EXPONENTIAL PERFORMANCE MINDSET 4.0')}
              </div>
              <div className="tracks-container">
                <h1 className="track-group-heading">FULL STACK DEVELOPMENT</h1>
                {this.renderTracks('FULL STACK DEVELOPMENT')}
              </div>
              <div className="tracks-container">
                <h1 className="track-group-heading">TECH 4.0 TRACKS</h1>
                {this.renderTracks('TECH 4.O TRACKS')}
              </div>
              <div className="tracks-container">
                <h1 className="track-group-heading">PROFESSIONAL READINESS</h1>
                {this.renderTracks('PROFESSIONAL READINESS')}
              </div>

              <div className="tracks-container">
                <h1 className="track-group-heading">community</h1>
                {this.renderTracks('COMMUNITY')}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default AllTracks
