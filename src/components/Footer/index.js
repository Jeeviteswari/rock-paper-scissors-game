import Modal from '../Modal'
import './index.css'

const Footer = () => {
  const onClickRulesButton = () => {
    ;<Modal />
  }

  return (
    <>
      <div className="Footer-container">
        <button
          type="button"
          className="rules-button"
          onClick={onClickRulesButton}
        >
          Rules
        </button>
      </div>
    </>
  )
}
export default Footer
