import React, { useRef } from 'react'
import './testimonials.css'
const Testimonials = () => {

    const slider=useRef();
    let tx=0;

    const slideForward=()=>{
      if(tx>-50){
        tx-=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
      if(tx<0){
        tx+=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
      <img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" alt="" className='next-btn' onClick={slideForward}/>
      <img src="https://cdn-icons-png.flaticon.com/128/8213/8213500.png" alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?b=1&s=612x612&w=0&k=20&c=wZAOYpGDl8RmvqXR81tijUcPdi3zGiHvR6T8vg9LjcY=" alt="" width="250px" />
                <div>
                  <h3>Rohith</h3>
                  <span>AndhraUniversity</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at andhra university was one of the best decision i've ever made.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://images.pexels.com/photos/12662813/pexels-photo-12662813.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="250px"/>
                <div>
                  <h3>Lavanya</h3>
                  <span>AndhraUniversity</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at andhra university was one of the best decision i've ever made.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://images.pexels.com/photos/7567497/pexels-photo-7567497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="250px"/>
                <div>
                  <h3>Ram</h3>
                  <span>AndhraUniversity</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at andhra university was one of the best decision i've ever made.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src="https://images.pexels.com/photos/9159279/pexels-photo-9159279.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="250px"/>
                <div>
                  <h3>Lakshmi</h3>
                  <span>AndhraUniversity</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at andhra university was one of the best decision i've ever made.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials
