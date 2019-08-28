import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Gender.css'
export default function Gender({ 
  genderName,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7, 
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  href1,
  href2,
  href3,
  href4,
  href5,
  href6,
  href7
  }) {
        return (
            <section className="main-section"
            style={{
              display: 'flex',
              flexDirection: 'column !important'
            }}>
              <div className="first-section">
                  <div className="image-section-wrapper">
                    <div className="image-button">
                        <Link to={`/${genderName}/${href1}`}>Shop {name1}</Link>
                      </div>
                      <div className="section-image" 
                      style={{ 
                        backgroundImage: `url('${img1}')`,
                        width: '40vw',
                        height: '55vh',
                        opacity: '0.93',
                        borderRadius: '5px',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
    
                        </div>
                    </div> 
    
                  <div className="image-section-wrapper">
                    <div className="image-button">
                      <Link to={`/${genderName}/${href2}`}>Shop {name2}</Link>
                    </div>
                    <div className="section-image" style={{ 
                      backgroundImage: `url(${img2})`,
                      width: '40vw',
                      height: '55vh',
                      opacity: '0.93',                 
                      backgroundPosition: 'center',
                      borderRadius: '5px',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                      }}>
                      
                      </div>
                  </div>
              </div>
              <div className="second-section">         
                      <div id="second-section-image" style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundImage: `url('${img3}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '100vh',
                        opacity: '.9',
                        zIndex: '1',
                        
                      }}>
                        <div className="second-section-title">
                          <h1>Check Our latest {name3}</h1>
                        <div className="second-section-button">
                          <Link to={`/${genderName}/${href3}`}>Go {name3}</Link>
                        </div>
                        </div>
                      </div>
              </div>
              <div className="third-section">
                   <div className="third-section-item"
                   style={{
                     backgroundImage: `url('${img4}')`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     borderRadius: '10px',
                     opacity: '.97',
                     width: '24vw',
                     height: '30vh'
                   }}>
                     <div className="third-section-item-btn"  >
                      <Link to={`/${genderName}/${href4}`}>{name4}</Link> 
                     </div>
                    </div>
                   <div className="third-section-item"  style={{
                     backgroundImage: `url('${img5}')`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     borderRadius: '10px',
                     opacity: '.97',
                     width: '24vw',
                     height: '30vh'
                   }}>
                   <div className="third-section-item-btn">
                      <Link to={`/${genderName}/${href5}`}>{name5}</Link> 
                    </div>
                   </div>
                   <div className="third-section-item" id="third-section-item-3" style={{
                     backgroundImage: `url('${img6}')`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     borderRadius: '10px',
                     opacity: '.97',
                     width: '24vw',
                     height: '30vh'
                   }}>   
                   <div className="third-section-item-btn"  >
                      <Link to={`/${genderName}/${href6}`}>{name6}</Link> 
                    </div></div>
                   <div className="third-section-item"  style={{
                     backgroundImage: `url('${img7}')`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     borderRadius: '10px',
                     opacity: '.97',
                     width: '24vw',
                     height: '30vh'
                   }}>
                   <div className="third-section-item-btn" >
                      <Link to={`/${genderName}/${href7}`}>{name7}</Link> 
                     </div>
                   </div>
              </div>
          </section>
        )
    }
    