import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Footer from '../Footer'
import Navbar from '../Navbar'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Profile extends Component {
  state = {
    username: '',
    name: '',
    userImg: '',
    isLoading: true,
    showUploadButton: false,
    btnLoading: false,
  }

  componentDidMount() {
    this.getUserData()
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
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
      'https://vinni-server.herokuapp.com/userdetails',
      options,
    )
    const userDetails = await response.json()

    this.setState({
      isLoading: false,
      username: userDetails.username,
      name: userDetails.name,
      userImg: userDetails.userImg,
    })
  }

  setTimeOut = () => {
    this.timerId = setTimeout(() => {
      document.querySelector('.update-msg').classList.toggle('d-none')
      this.setState({showUploadButton: false})
    }, 1500)
  }

  uploadImageToServer = async () => {
    this.setState({btnLoading: true})
    const {userImg, username} = this.state
    const jwtToken = await Cookies.get('jwt_token')

    const data = {
      username,
      userImg,
    }
    const options = {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }

    await fetch('/upload', options)

    this.setState({isLoading: false, btnLoading: false})
    document.querySelector('.update-msg').classList.toggle('d-none')
    this.setTimeOut()
  }

  onChangeImage = async e => {
    const {files} = e.target

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ccbpusers')

    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/ccbpians/image/upload',
      {
        method: 'POST',
        body: data,
      },
    )

    const file = await res.json()

    const secureUrl = file.secure_url

    this.setState({userImg: secureUrl, showUploadButton: true})
  }

  render() {
    const {
      isLoading,
      name,
      username,
      userImg,
      showUploadButton,
      btnLoading,
    } = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="blue" height={30} width={30} />
          </div>
        ) : (
          <div className="profile-component-container">
            <Navbar />
            <div className="profile-img-container">
              <div className="img-container">
                {userImg === null ? (
                  <div className="profile-name">
                    <label htmlFor="user-img">
                      <p>{name.slice(0, 1)}</p>
                    </label>
                  </div>
                ) : (
                  <label className="user-label" htmlFor="user-img">
                    <img src={userImg} className="user-dp" alt={username} />
                  </label>
                )}
                <input
                  type="file"
                  id="user-img"
                  accept="image"
                  className="d-none user-input"
                  onChange={this.onChangeImage}
                />
              </div>
            </div>

            <div className="user-details-con">
              <p className="update-msg d-none">profile updated</p>
              {showUploadButton && (
                <button
                  onClick={this.uploadImageToServer}
                  type="button"
                  className="upload-button"
                >
                  {btnLoading ? (
                    <Loader type="Oval" color="red" height={30} width={30} />
                  ) : (
                    'upload'
                  )}
                </button>
              )}
              <div className="username-container">
                Username:<span className="name"> {username}</span>
              </div>
              <div className="name-container">
                Name:<span className="name"> {name}</span>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </>
    )
  }
}

export default Profile
