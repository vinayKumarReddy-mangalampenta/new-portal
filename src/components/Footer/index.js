import {
  GrFacebookOption,
  GrTwitter,
  GrLinkedinOption,
  GrYoutube,
  GrMail,
} from 'react-icons/gr'
import {CgCopyright} from 'react-icons/cg'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner-con">
      <div className="inner-con">
        <div className="section">
          <a href="https://ccbp.in/" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/due4dmz2b/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fd1tgh8fmlzexmh.cloudfront.net%2Fwebsite%2FHeader_Nextwave.png"
              alt="logo"
              className="footer-logo "
              draggable="false"
            />
          </a>
          <div className="icons-con">
            <a
              href="https://www.facebook.com/nxtwave.tech"
              rel="noreferrer"
              target="_blank"
              className="icon-con a"
            >
              <GrFacebookOption />
            </a>
            <a
              href="https://www.twitter.com/nxtwave.tech"
              rel="noreferrer"
              target="_blank"
              className="icon-con b"
            >
              <GrTwitter />
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6775759346841346048/"
              rel="noreferrer"
              target="_blank"
              className="icon-con c"
            >
              <GrLinkedinOption />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLlHgusuRTH6H4QQdYNwzoQ"
              rel="noreferrer"
              target="_blank"
              className="icon-con d"
            >
              <GrYoutube />
            </a>
          </div>
        </div>
        <div className="section2">
          <p className="quick-links"> QUICK LINKS</p>
          <div className="links">
            <a
              href="https://ccbp.in/acdemy"
              rel="noreferrer"
              target="_blank"
              className="link-item"
            >
              <p className="link-text">CCBP 4.O Academy</p>
            </a>
            <a
              href="https://ccbp.in/intensive"
              rel="noreferrer"
              target="_blank"
              className="link-item"
            >
              <p className="link-text">CCBP TECH 4.O Intensive</p>
            </a>
            <a
              href="https://ccbp.in/foundations"
              rel="noreferrer"
              target="_blank"
              className="link-item"
            >
              <p className="link-text">CCBP 4.O Foundations</p>
            </a>
          </div>
        </div>
        <div className="section3">
          <p className="quick-links"> REACH US</p>
          <div>
            <a
              href="mailto:support@nxtwave.tech?subject=NxtWave Reach Us!&amp;body=Your query"
              rel="noreferrer"
              target="_blank"
              className="link-item"
            >
              <span className="mail">
                <GrMail /> supports@nxtwave.tech
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="privacy-policy">
        <p>Privacy Policy</p>
        <p className="privacy-policy-text">
          This is created just show case my skills all copy rights reserved to{' '}
          <CgCopyright /> Nxt Wave
        </p>
      </div>
    </div>
  </div>
)
export default Footer
