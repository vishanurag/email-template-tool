import React from 'react'
import { FaPencil, FaEnvelope, FaEraser, FaDownload } from 'react-icons/fa6'

const Header = (props: any) => {

  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
        { <FaPencil /> }
          <span className='px-2'>Email Templates</span>
        </a>

        {/* Hamburger menu for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar options */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="nav-link border mx-2 px-3 rounded shadow sm-w-25">
              { <FaEnvelope /> }
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link border mx-2 px-3 rounded shadow sm-w-25">
              { <FaEraser /> }
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link border mx-2 px-3 rounded shadow sm-w-25">
              { <FaPencil /> }
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link border mx-2 px-3 rounded border-secondary shadow sm-w-25" onClick={props.sendForDownload}>
              { <FaDownload /> }
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
