import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsChevronRight} from 'react-icons/bs'
import ScheduleButton from '../ScheduleButton'
import Navbar from '../Navbar'

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
    const {username} = userDetails
    return (
      <>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="blue" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container">
            <Navbar />
            <div className="home">
              <h1 className="welcome-user-heading">Hi {username},</h1>
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
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home
