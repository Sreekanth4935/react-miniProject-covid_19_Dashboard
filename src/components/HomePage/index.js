import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
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
            <div className="search-container">
              <AiOutlineSearch size={23} className="search-icon" />
              <input
                className="input-search"
                type="search"
                placeholder="Enter the State"
              />
            </div>
          </div>
        </div>

        <div className="covid-active-container">
          <div className="covid-active-details">
            <div className="active-details">
              <p>Confirmed</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356507/check-mark_15_a3lzmc.svg"
                alt="confirmed"
              />
              <p>34285612</p>
            </div>

            <div className="active-details">
              <p>active</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356363/Active_Img_bupux7.svg"
                alt="active"
              />
              <p>165803</p>
            </div>

            <div className="active-details">
              <p>Recovered</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356401/recovered_15_say83r.svg"
                alt="recovered"
              />
              <p>33661339</p>
            </div>

            <div className="active-details">
              <p>Deceased</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356596/Corona_Virus_Symptoms_Shortness_of_breath5_ts8hju.svg"
                alt="deceased"
              />
              <p>458470</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
