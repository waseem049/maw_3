import React from "react";
import "./header.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  // function adjustLayout() {
  //   const elements = document.querySelector('.futurex__header-elements');
  //   if (window.innerWidth <= 550) {
  //     elements.classList.remove('tablet');
  //   } else {
  //     elements.classList.add('tablet');
  //   }
  // }
  
  // Call the function initially and whenever the window is resized
  // adjustLayout();
  // window.addEventListener('resize', adjustLayout);
  
    return (
        <>
          <div className="futurex__header section_padding">
            <div className="futurex__header-content">
              <div className="futurex_header-content1">
                <h1 className="gradient__text">
                    CONNECTING THE <br />
                    WORLD <br />
                    THROUGH <br />
                    NEW TECHNOLOGIES
                </h1>
                <p>
                  Annotate better with CVAT, the industry-leading data
                  engine for machine learning. Used and trusted by teams
                  at any scale, for data of any scale.
                </p>   
              </div>    
              <div className="futurex__header-content_exhibitions">
                <div className="futurex__header-content_exhibitions-header1">
                    Tickets
                </div>
                <div className="futurex__header-content_exhibitions-header2">
                  <div>
                    <div>Sponsors</div>
                  </div>
                  <AiOutlineArrowRight className="futurex__header-content_exhibitions-header2-icon" />
                </div>
              </div>
            </div>
            <div className="futurex__header-video">
              <iframe className="futurex__header-video_element" src="https://www.youtube.com/embed/BadB1z-V_qU?autoplay=1&loop=1&playlist=BadB1z-V_qU&mute=1" title="tech video">
                
              </iframe>
            </div>
          </div>
          
          <div className="futurex__header-elements">
              <p>AI</p>
              <p>BLOCKCHAIN</p>
              <p>DL</p>
              <p>DEFI</p>
              <p>METAVERSE</p>
              <p>WEB3</p>
          </div>
        </>
    );
};

export default Header;