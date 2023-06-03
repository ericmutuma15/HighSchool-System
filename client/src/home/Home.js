import React, {useState} from 'react'

import './home.css'
import { IoIosHome } from 'react-icons/io';
import { IoIosPeople } from 'react-icons/io';
import { SiOrg } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import { FaTable } from 'react-icons/fa';
import ADMIN from '../../src/assets/njurilogo.jpg'
import STAFF from '../../src/assets/NjuriHighSchoolEducationTour2.jpg'
import STUDENTS from '../../src/assets/NjuriHighSchoolEducationTour7.jpg'
import DEPARTMENT from '../../src/assets/NjuriHighSchoolEducationTour6.jpg'
import TT from '../../src/assets/schooltimetable.jpg'



const Home = () => {
  const [activeNav, setActiveNav] = useState();
    return (

<div className='container'>
  <div className='nav'>
  
    <nav>
      <a href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoIosHome/></a>
      <a href="#" onClick={() => setActiveNav('#About')} className={activeNav === '#' ? 'active' : ''}><IoIosPeople/></a>
      <a href="#" onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ''}><SiOrg/></a>
      <a href="#" onClick={() => setActiveNav('#services')} className={activeNav === '#' ? 'active' : ''}><IoIosSchool/></a>
      <a href="#" onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><FaTable/></a>
    </nav>
  
    </div>
    <div className='container_items'>
      <div className='item'>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ADMIN} alt="" />
          </div>
            <h3>Home Page</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Annex-Cafe" className='btn' target='_blank'>Home</a>
            
            </div>
        </article>
      </div>
      <div className='item'>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={STAFF} alt="" />
          </div>
            <h3>View our Staff</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Annex-Cafe" className='btn' target='_blank'>Staff</a>
            
            </div>
        </article>
      </div>

      <div className='item'>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={STUDENTS} alt="" />
          </div>
            <h3>Students Database</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Annex-Cafe" className='btn' target='_blank'>Students</a>
            
            </div>
        </article>
      </div>

      <div className='item'>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DEPARTMENT} alt="" />
          </div>
            <h3>School Departments</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Annex-Cafe" className='btn' target='_blank'>Departments</a>
            
            </div>
        </article>
      </div>

      <div className='item'>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TT} alt="" />
          </div>
            <h3>View Timetable</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/HillaryNyakundi/Annex-Cafe" className='btn' target='_blank'>Timetable</a>
            
            </div>
        </article>
      </div>
    </div>


    </div>           



    )
}

export default Home