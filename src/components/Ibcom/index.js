import './index.css'

const Ibcom = () => {
  const toggleDownloadButton = () => {
    const downloadButton = document.querySelector('.download-button')
    downloadButton.classList.toggle('d-none')

    const crossButton = document.querySelector('.cross-img')
    crossButton.classList.toggle('d-none')

    const ibcomButton = document.querySelector('.ibcom-img')
    ibcomButton.classList.toggle('d-none')

    const heading = document.querySelector('.personal-manager')
    heading.classList.toggle('d-none')
  }

  return (
    <div className="ibcom-container">
      <div className="personal-manager d-none">
        <span>Personal Manager</span>
        <img
          src="https://learning.ccbp.in/images/personalManager.png"
          className="pm"
          alt="pm"
        />
      </div>
      <div className="btn-con mt-5">
        <a
          href="https://play.google.com/store/apps/details?id=co.ibhubs.chat"
          target="_blank"
          className="download-button d-none"
          rel="noreferrer"
        >
          <p>download</p>
        </a>
        <button
          className="ibcom-button"
          onClick={toggleDownloadButton}
          type="button"
        >
          <img
            src="https://res.cloudinary.com/vinayreddy/image/upload/v1637462339/ibcom_m6ujsf.png"
            className="ibcom-img "
            alt="ibcom"
          />
          <img
            src="https://vectorified.com/images/cross-button-icon-27.png"
            className="cross-img d-none"
            alt="close"
          />
        </button>
      </div>
    </div>
  )
}

export default Ibcom
