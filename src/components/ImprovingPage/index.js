import {FaHandPointRight} from 'react-icons/fa'
import Navbar from '../Navbar'

import './index.css'

const ImprovingPage = props => {
  const {match} = props
  const {params} = match
  const {trackId} = params
  const courseName = trackId.split('-').join(' ')
  return (
    <div>
      <Navbar />
      <div className="course-name-con">
        <div className="right-arrow">
          <FaHandPointRight className="arrow" />{' '}
        </div>
        <h1 className="course-name">{courseName}</h1>
      </div>
      <div className="container">
        <img
          src="https://res.cloudinary.com/vinayreddy/image/upload/v1637430269/sessionlock_tib4ce.png"
          alt="locked"
          draggable="false"
          className="lock-image"
        />
        <p className="locked-session-text">
          Currently this session is locked for you
        </p>
      </div>
    </div>
  )
}
export default ImprovingPage
