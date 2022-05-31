import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class GameApp extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />

        <div className="play-container">
          <img src="" className="image" alt="rock" />
          <img src="" className="image" alt="scissors" />
          <img src="" className="image" alt="paper" />
        </div>

        <Footer />
      </div>
    )
  }
}
export default GameApp
