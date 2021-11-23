import {withRouter} from 'react-router-dom'
import {FiCornerDownRight} from 'react-icons/fi'
import {RiTimer2Line} from 'react-icons/ri'
import './index.css'

const NextSessions = props => {
  const {history} = props
  const navigateToSession = () => {
    history.push(
      '/track/4.0-fellowship/course?c_id=Introduction-to-industrial-revolutions&s_id=Introduction-to-industrial-revolutions-part-1',
    )
  }
  return (
    <div className="next-session-card">
      <div>
        <h1 className="next-session-heading">
          Introduction to industrial revolutions
        </h1>
        <p className="topic-name">4.O Revolution</p>
        <div className="sub-topic">
          <span className="icon-right">
            <FiCornerDownRight />
          </span>

          <span className="sub-topic-text">
            Introduction to industrial revolutions part-1
          </span>
        </div>
        <div className="timer">
          <RiTimer2Line /> 45 mins
        </div>
      </div>
      <div className="start-complete-btn-con mt-4">
        <button
          onClick={navigateToSession}
          type="button"
          className="start-button"
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default withRouter(NextSessions)
