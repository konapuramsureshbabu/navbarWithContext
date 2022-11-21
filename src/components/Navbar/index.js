import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const modeClick = () => {
        toggleTheme()
      }

      return (
        <div className={isDarkTheme ? 'nav-div nav-div-dark' : 'nav-div '}>
          {isDarkTheme === false ? (
            <img
              className="web-logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          ) : (
            <img
              className="web-logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          )}

          <ul className="link-div">
            <li>
              <Link className={isDarkTheme ? 'link link-dark' : 'link '} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={isDarkTheme ? 'link link-dark' : 'link '}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {isDarkTheme ? (
            <button
              // eslint-disable-next-line react/no-unknown-property
              testid="theme"
              className="btn"
              onClick={modeClick}
              type="button"
            >
              <img
                className="web-logo"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            </button>
          ) : (
            <button
              // eslint-disable-next-line react/no-unknown-property
              testid="theme"
              className="btn"
              onClick={modeClick}
              type="button"
            >
              <img
                className="web-logo"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            </button>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
