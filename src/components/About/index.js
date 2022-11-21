import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className={isDarkTheme ? 'head head-light' : 'head head-dark'}>
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
