import React from 'react'
import './contact.css'
// we used web3 service for mail
const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "55272510-54e0-47d4-8c97-db89024daacd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };







  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below . Your feedbach,questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

        <ul>
          <li><img src="https://cdn-icons-png.flaticon.com/128/18383/18383557.png" alt="" /> sailaxmipulagam@gmail.com</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/128/18552/18552958.png" alt="" /> +91 1234567890</li>
          <li> <img src="https://cdn-icons-png.flaticon.com/128/17935/17935827.png" alt="" /> Uppal,Hyderabad <br />
          Telangana</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label htmlFor="">Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter your Mobile Number' required />
          <label htmlFor="">Write your Message</label>
          <textarea name="message" id="" rows="6" placeholder='Enter your Message' required></textarea>
          <button type='submit' className='btn-dark'>Submit Now⇒</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
