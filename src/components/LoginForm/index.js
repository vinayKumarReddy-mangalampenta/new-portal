import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoEyeOff} from 'react-icons/io5'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaKey,
  FaUserGraduate,
  FaRegEye,
} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isError: false,
    errMsg: '',
    isLoading: false,
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onLoginSuccess = jwtToken => {
    this.setState({isLoading: false})
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitForm = async e => {
    e.preventDefault()
    this.setState({isLoading: true})
    const {username, password} = this.state
    const data = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
    const url = 'https://vinni-server.herokuapp.com/login'
    const response = await fetch(url, options)
    const dbRes = await response.json()

    if (response.ok !== true) {
      this.setState({isError: true, errMsg: dbRes.error_msg, isLoading: false})
    } else {
      this.onLoginSuccess(dbRes.jwt_token)
    }
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {showPassword, isError, errMsg, isLoading} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <a
                    href="https://www.facebook.com/nxtwave.tech"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6775759346841346048/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.twitter.com/nxtwave.tech"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsTwitter />
                  </a>
                </span>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/vinayreddy/image/upload/v1636516898/logo_klutqs.png"
              alt="logo"
              className="logo"
            />
            <div className="card-body">
              <form onSubmit={this.onSubmitForm}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FaUserGraduate />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FaKey />
                    </span>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control password"
                    placeholder="password"
                    onChange={this.onChangePassword}
                  />
                  <button
                    type="button"
                    className="eye-icon"
                    onClick={this.togglePassword}
                  >
                    {showPassword ? <FaRegEye /> : <IoEyeOff />}
                  </button>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn float-right login_btn">
                    {isLoading ? (
                      <Loader
                        type="TailSpin"
                        color="blue"
                        height={20}
                        width={20}
                      />
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
              </form>
            </div>
            {isError && <p className="err-msg ">*{errMsg}</p>}
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Not Yet Joined? <a href="/signup">Join Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
