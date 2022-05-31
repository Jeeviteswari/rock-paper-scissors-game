import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <div className="headings">
        <h1 className="heading">ROCK</h1>
        <h1 className="heading">PAPER</h1>
        <h1 className="heading">SCISSORS</h1>
      </div>
      <div className="score-container">
        <p className="score-name">Score</p>
        <p className="score-value">0</p>
      </div>
    </div>
  </>
)
export default Header
