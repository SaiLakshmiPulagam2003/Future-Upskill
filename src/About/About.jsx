import React from 'react'
import './about.css'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src="https://tse2.mm.bing.net/th?id=OIP.U0Cn-mKX5wLIJQWlrrCwRwHaE8&pid=Api&P=0&h=180" alt="" className='about-img' />
        {/* <img src="https://cdn-icons-png.flaticon.com/128/5690/5690573.png" alt="" className='play-img' onClick={()=>{setPlayState(true)
        }}/> */}
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nourishing tomorrow's leaders This day.</h2>
        <p>Our university is committed to fostering innovation, academic excellence, and leadership. With a rich legacy of empowering students, we provide a dynamic learning environment where knowledge meets real-world applications.  </p>

        <p>At our university, we believe in empowering the next generation with the skills, knowledge, and values needed to thrive in an ever-evolving world. Our emphasis on creativity, collaboration, and real-world applications ensures that graduates are not only academically strong but also socially responsible and industry-ready. </p>
      </div>
    </div>
  )
}

export default About
