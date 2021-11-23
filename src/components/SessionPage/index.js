import {FaHandPointRight, FaHandPointLeft} from 'react-icons/fa'
import Navbar from '../Navbar'

import './index.css'

const SessionPage = props => {
  const {location} = props

  const {search} = location

  const topicList = search.split('&')
  const topicName = topicList[0].split('=')[1].split('-').join(' ')
  const subTopicName = topicList[1].split('=')[1].split('-').join(' ')

  const openNav = () => {
    document.getElementById('mySidebar').classList.toggle('index')
    document.querySelector('.container').classList.toggle('when-bar-open-con')
    document
      .querySelector('.course-name')
      .classList.toggle('when-bar-open-name')
  }

  const closeNav = () => {
    document.getElementById('mySidebar').classList.toggle('index')
    document.querySelector('.container').classList.toggle('when-bar-open-con')
    document
      .querySelector('.course-name')
      .classList.toggle('when-bar-open-name')
  }

  return (
    <div>
      <Navbar />
      <div className="course-name-con">
        <div id="mySidebar" className="sidebar">
          <div className="sidebar-heading">
            <span className="content">Content</span>
            <button type="button" onClick={closeNav} className="closing-button">
              <FaHandPointLeft className="arrow" />{' '}
            </button>
          </div>
        </div>

        <button
          onClick={openNav}
          type="button"
          className="opening-button right-arrow"
        >
          <span>
            {' '}
            <FaHandPointRight className="arrow" />{' '}
          </span>
        </button>

        <h1 className="course-name">
          {topicName} &gt;{subTopicName}
        </h1>
      </div>
      <div className="container ml-auto">
        <div className="black select-lang-con">
          <select className="select-tag">
            <option>English</option>
            <option selected>Telugu</option>
          </select>
        </div>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/CeyVSVZeseA?rel=0"
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="black"> </div>
      </div>
    </div>
  )
}
export default SessionPage
