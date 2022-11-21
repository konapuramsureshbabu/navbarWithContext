import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="home-bg">
          <Navbar />
          <div
            className={isDarkTheme ? 'home-card home-bg-dark' : 'home-card '}
          >
            <img
              className="h-a-icon"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />

            <h1 className={isDarkTheme ? 'nf-h nf-h-dark' : 'nf-h '}>
              Lost Your Way?
            </h1>
            <p className={isDarkTheme ? 'nf-h nf-h-dark' : 'nf-h '}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
