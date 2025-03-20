import React from 'react'
import './campus.css'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src="https://images.pexels.com/photos/7972348/pexels-photo-7972348.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img src="https://images.pexels.com/photos/5553641/pexels-photo-5553641.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img src="https://images.pexels.com/photos/5965682/pexels-photo-5965682.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img src="https://images.pexels.com/photos/7973199/pexels-photo-7973199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <button className=' btn-dark'>See More here ⇒</button>
    </div>
  )
}

export default Campus
