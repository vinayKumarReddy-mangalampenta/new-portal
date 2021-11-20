import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'
import 'sz-navbar'

class Navbar extends Component {
  state = {userDetails: {}}

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
    this.setState({userDetails})
  }

  onLogout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onChangeNavPosition = () => {
    document.querySelector('.sz-navbar-items').classList.toggle('nav-width')
  }

  render() {
    const {userDetails} = this.state
    const {username} = userDetails
    /*
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/vinayreddy/image/upload/v1636516898/logo_klutqs.png"
            alt="logo"
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link link" href="/">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link " href="/">
                PROFILE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link " href="/">
                {username}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/">
                MY DISCUSSIONS
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                onClick={this.onLogout}
                className="  btn btn-primary m-2 logout-button"
              >
                Logout
              </button>
            </li>
            <li className="nav-item d-none d-lg-block">
              <div className="profile">
                <p>v</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    ) */
    return (
      <nav className="sz-navbar bg-white navbar shadow">
        <div className="sz-navbar-inner sz-navbar-right">
          <div className="demo-navbar-logo">
            <a className="navbar-brand" href="/">
              <img
                src="https://res.cloudinary.com/vinayreddy/image/upload/v1636516898/logo_klutqs.png"
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <input
            type="checkbox"
            id="sz-navbar-check"
            onChange={this.onChangeNavPosition}
          />
          <label htmlFor="sz-navbar-check" className="sz-navbar-hamburger">
            ☰
          </label>

          <ul className="sz-navbar-items nav-width">
            <li className="nav-item sz-navbar-item active">
              <a className="nav-link link" href="/">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item sz-navbar-item">
              <a className="nav-link link " href="/">
                PROFILE
              </a>
            </li>

            <li className="nav-item sz-navbar-item">
              <a className="nav-link link" href="/">
                MY DISCUSSIONS
              </a>
            </li>
            <li className="nav-item sz-navbar-item">
              <button
                type="button"
                onClick={this.onLogout}
                className="  btn btn-primary m-2 logout-button"
              >
                Logout
              </button>
            </li>
            <li className="ml-2 mb-2 d-none d-lg-block ">
              <div className="profile">
                <p>v</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
