import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsChevronRight} from 'react-icons/bs'
import ScheduleButton from '../ScheduleButton'
import HomeTracks from '../HomeTracks'
import NextSessions from '../NextSessions'
import Navbar from '../Navbar'
import Footer from '../Footer'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {userDetails: {}, isLoading: true, tab: 'sessions'}

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    const jwtToken = await Cookies.get('jwt_token')
    const data = {jwtToken}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(
      'https://ccbp-server.herokuapp.com/userdetails',
      options,
    )
    const userDetails = await response.json()
    console.log(response)
    this.setState({isLoading: false, userDetails})
  }

  changeCategory = tab => {
    this.setState({tab})
  }

  renderScheduleButtons = () => {
    const {tab} = this.state
    const buttonsList = [
      {tabId: 'sessions', tabsDisplayText: 'Sessions'},
      {tabId: 'assignments', tabsDisplayText: 'Assignments'},
    ]

    return (
      <ul className="button-list-container">
        {buttonsList.map(each => (
          <ScheduleButton
            key={each.tabId}
            each={each}
            changeCategory={this.changeCategory}
            isActive={each.tabId === tab}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, userDetails, tab} = this.state
    const {name} = userDetails
    return (
      <>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="blue" height={30} width={30} />
          </div>
        ) : (
          <div className="home-container">
            <Navbar />
            <div className="home">
              <h1 className="welcome-user-heading">Hi {name},</h1>
              <div className="your-schedule-container">
                <h1 className="your-schedule">
                  Your Schedule{' '}
                  <div className="my-idp">
                    My Idp <BsChevronRight className="idp-arrow" />
                  </div>
                </h1>
                <p className="next-sessions">
                  As per your IDP, complete these {tab} next
                </p>
              </div>
              {this.renderScheduleButtons()}
              {tab === 'assignments' ? (
                <h1> you have completed all </h1>
              ) : (
                <NextSessions />
              )}
              <HomeTracks />
            </div>
            <div className="explore-all-tracks-container">
              <div className="explore-all">
                <div className="bg">
                  <div className="text">
                    <p>
                      CCBP 4.0 is powerfully designed with multiple course
                      tracks to get you Industry ready with the most in-demand
                      4.0 Tech and Management skills. Courses will be
                      recommended for you as per your Individual Development
                      Plan.
                    </p>
                  </div>
                  <Link to="tracks/all">
                    <button type="button" className="button-container">
                      <span className="btn-text">Explore All Tracks </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </>
    )
  }
}

export default Home
