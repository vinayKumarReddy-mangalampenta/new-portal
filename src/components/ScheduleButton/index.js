import './index.css'

const ScheduleButton = props => {
  const {each, changeCategory, isActive} = props
  const {tabsDisplayText, tabId} = each
  const buttonClass = isActive ? 'tab-button active-button' : 'tab-button'

  const setAsActive = () => {
    changeCategory(tabId)
  }
  return (
    <li className="list-container">
      <button type="button" onClick={setAsActive} className={buttonClass}>
        {tabsDisplayText}
      </button>
    </li>
  )
}

export default ScheduleButton
