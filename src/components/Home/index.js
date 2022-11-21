import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="bg-container">
          <Navbar />
          <div
            className={
              isDarkTheme ? 'card-container dark-bg' : 'card-container'
            }
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={isDarkTheme ? 'head head-light' : 'head-dark'}>
              Home
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
