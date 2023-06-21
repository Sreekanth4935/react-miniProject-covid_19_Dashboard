import {Component} from 'react'
import Header from '../Header'
import './index.css'

class HomePage extends Component {
  state = {
    inputSearchText: '',
  }

  render() {
    return (
      <div className="covid-bg">
        <Header />
        <div className="second-section">
          <div className="covid-details-container ">
            <input className="input-search" type="search" />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
