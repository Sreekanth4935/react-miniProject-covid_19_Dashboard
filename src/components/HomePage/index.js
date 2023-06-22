import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import './index.css'

class HomePage extends Component {
  state = {
    inputSearchText: '',
  }

  componentDidMount() {
    this.renderStateWiseData()
  }

  renderStateWiseData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const responseData = await fetch(url, options)
    // console.log(responseData)
    const data = await responseData.json()
    console.log(data)
  }

  render() {
    return (
      <div className="covid-bg">
        <Header />
        <div className="second-section">
          <div className="covid-details-container ">
            <div className="search-container">
              <BsSearch size={23} className="search-icon" />
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
            <div
              data-testid="countryWideConfirmedCases"
              className="active-details red"
            >
              <p className="text">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356507/check-mark_15_a3lzmc.svg"
                alt="country wide confirmed cases pic"
              />
              <p className="number">34285612</p>
            </div>

            <div
              data-testid="countryWideActiveCases"
              className="active-details blue"
            >
              <p className="text">Active</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356363/Active_Img_bupux7.svg"
                alt="country wide active cases pic"
              />
              <p className="number">165803</p>
            </div>

            <div
              data-testid="countryWideRecoveredCases"
              className="active-details green"
            >
              <p className="text">Recovered</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356401/recovered_15_say83r.svg"
                alt="country wide recovered cases pic"
              />
              <p className="number">33661339</p>
            </div>

            <div
              data-testid="countryWideDeceasedCases"
              className="active-details hash"
            >
              <p className="text">Deceased</p>
              <img
                src="https://res.cloudinary.com/dt4ko7tom/image/upload/v1687356596/Corona_Virus_Symptoms_Shortness_of_breath5_ts8hju.svg"
                alt="country wide deceased cases pic"
              />
              <p className="number">458470</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
