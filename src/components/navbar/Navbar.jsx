import React, {useState} from 'react'
import './navbar.css'
import {RiCloseLine} from 'react-icons/ri'
import {RiMenu3Line} from 'react-icons/ri'
import logo from '../../assets/Logo.png'; // Adjust the path to your logo image


const Menu = () => (
  <>
    <p><a href='#attendees'>Attendees</a></p>
    <p><a href='#wfuturex'>What is FutureX</a></p>
    <p><a href='#agenda'>Agenda</a></p>
    <p><a href='#partners'>Partners</a></p>
    <p><a href='#contact'>Contact</a></p>
  </> 
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".futurex__navbar");
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  return (
    <div className='futurex__navbar gradient__bg'>
      <div className='futurex__navbar-links'>
        <div className='futurex__navbar-links_logo'>
          <img src={logo} alt='maw3'/>
          {/* <link rel="shortcut icon" href={../assets/Logo.png} /> */}
          {/* <h1>Future<span>X</span></h1> */}
          {/* <svg class="logo-brand" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fill-rule="evenodd">
            <path d="M26.2 8.315c1.975 0 3.74.359 5.235 1.077 1.526.717 2.692 1.764 3.5 3.11.807 1.346 1.226 2.931 1.226 4.696v.18c0 1.764-.419 3.35-1.226 4.695-.808 1.316-2.004 2.363-3.5 3.081-1.495.718-3.26 1.077-5.234 1.077-1.944 0-3.709-.36-5.204-1.077-1.496-.718-2.692-1.765-3.5-3.11-.807-1.346-1.226-2.902-1.226-4.666v-.18c0-1.765.419-3.35 1.226-4.696.808-1.346 2.004-2.393 3.5-3.11 1.495-.718 3.23-1.077 5.204-1.077Zm.03 4.756c-1.644 0-2.9.358-3.768 1.046-.837.688-1.256 1.675-1.256 3.021v.3c0 1.345.389 2.302 1.226 2.99.838.688 2.124 1.047 3.799 1.047 1.256 0 5.055 0 5.055-4.038v-.299c0-1.346-.42-2.333-1.257-3.02-.837-.689-2.123-1.047-3.798-1.047ZM113.537 8.644c2.094 0 3.769.508 4.995 1.555 1.227 1.047 1.855 2.483 1.855 4.277v.27c0 1.435-.449 2.602-1.286 3.499-.898.927-2.064 1.466-3.5 1.555h-.329l5.115 6.102h-6.73l-5.354-6.52v6.52h-5.055V8.644h10.29Zm-.12 4.486h-5.114v2.872h5.115c.628 0 1.076-.12 1.376-.36.299-.209.418-.538.418-.986v-.24c0-.568-.18-1.286-1.794-1.286ZM59.161 25.902h5.055V19.98h3.32l2.632-4.576h-6.012V13.25h8.076l2.632-4.576H59.191zM79.47 21.984c0-.18 0-.36.03-.509l-8.285 14.447h15.792c.748 0 1.466-.06 2.184-.18l-8.315-9.93a5.901 5.901 0 0 1-1.406-3.828ZM74.864 0v8.644h11.994l-4.875 8.494a5.898 5.898 0 0 1 3.44-1.106c1.854 0 3.499.837 4.575 2.153l9.123 10.887c1.286-2.123 2.004-4.606 2.004-7.268 0-4.546-2.154-8.584-5.474-11.156L101.753 0H74.864ZM162.65 9.69c-1.526.689-2.723 1.706-3.53 2.992-.838 1.286-1.256 2.811-1.256 4.516v.18c0 1.704.418 3.2 1.256 4.486.837 1.286 2.004 2.303 3.53 2.991 1.495.688 3.26 1.047 5.233 1.047h4.487v-4.606h-4.487c-1.704 0-2.99-.33-3.828-.987-.838-.658-1.226-1.586-1.226-2.872v-.299c0-1.286.418-2.213 1.256-2.901.867-.688 2.123-1.017 3.798-1.017h3.829l3.05-4.606h-6.879c-1.944.03-3.708.389-5.234 1.077ZM189.388 25.902v-4.457h-7.926v-2.153h3.799l2.243-3.888h-6.012V13.25h8.076l2.632-4.576h-15.733v17.258h5.085zM6.221 20.309c-.837-.658-1.226-1.586-1.226-2.872v-.299c0-1.286.419-2.213 1.256-2.901.868-.688 2.124-1.017 3.799-1.017h3.828l3.05-4.606H10.05c-1.974 0-3.739.359-5.235 1.047-1.525.688-2.721 1.705-3.529 2.99C.42 13.969 0 15.494 0 17.199v.18c0 1.704.419 3.2 1.256 4.486.838 1.286 2.004 2.303 3.53 2.991 1.495.688 3.26 1.047 5.234 1.047h4.486v-4.606H10.02c-1.675 0-2.961-.33-3.799-.987ZM135.611 13.22l2.632-4.576H122.57v17.258h12.921v-4.457H127.535v-2.153h3.799l2.243-3.888h-6.012V13.25z"></path><path d="M90.028 18.215a5.915 5.915 0 0 1 1.346 3.769 5.948 5.948 0 0 1-5.952 5.952 5.852 5.852 0 0 1-4.516-2.094l8.315 9.93a14.037 14.037 0 0 0 9.87-6.64l.03-.03-9.093-10.887Zm-8.015-1.077-7.119-8.494h11.994l-4.875 8.494Z" opacity=".5"></path><path d="M151.732 9.481c-1.226-.688-2.99-1.106-4.815-1.106-1.825 0-3.56.389-4.816 1.106a7.325 7.325 0 0 0-2.99 3.111c-.689 1.316-1.048 2.871-1.048 4.606v8.704h5.055v-8.704c0-1.525.389-2.213 1.017-2.961.718-.808 1.496-1.107 2.692-1.107h.09c1.196 0 2.004.33 2.692 1.107.658.718 1.016 1.436 1.016 2.961v8.704h5.055v-8.704c0-1.735-.359-3.29-1.047-4.606-.598-1.346-1.615-2.393-2.9-3.11M52.013 9.481c-1.226-.688-2.99-1.106-4.815-1.106-1.825 0-3.56.389-4.816 1.106a7.325 7.325 0 0 0-2.99 3.111c-.689 1.316-1.048 2.871-1.048 4.606v8.704H43.4v-8.704c0-1.525.389-2.213 1.017-2.961.718-.808 1.495-1.107 2.692-1.107h.09c1.196 0 2.004.33 2.691 1.107.658.718 1.017 1.436 1.017 2.961v8.704h5.055v-8.704c0-1.735-.359-3.29-1.047-4.606-.598-1.346-1.585-2.393-2.901-3.11"></path></g>
        </svg> */}
        </div>
        <div className='futurex__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='futurex__navbar-exhibitions'>
        <button className='futurex__navbar-exhibitions_ticket-button'>TICKETS</button>
        <button className='futurex__navbar-exhibitions_sponsor-button'>SPONSORS</button>
      </div>

      {/* // for media queries */}
      <div className='futurex__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='futurex__navbar-menu_container scale-up-center'>
            <div className='futurex__navbar-menu_container-links'>
              <Menu />
              <div className='futurex__navbar-menu_container-links-exhibitions'>
                  <button className='futurex__navbar-exhibitions_ticket-button'>TICKETS</button>
                  <button className='futurex__navbar-exhibitions_sponsor-button'>SPONSORS</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar