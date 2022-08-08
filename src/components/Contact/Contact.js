import React, { useRef, useState } from 'react';

import "./style.scss"
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

import loadingGif from "../../assets/loadingGif.gif"
import Footer from '../Footer/Footer';

const Contact = () => {
  const formRef = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pronouns, setPronouns] = useState('')
  const [message, setMessage] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [loading, setloading] = useState(false)

  const scriptUrl = "https://script.google.com/macros/s/AKfycbxmtSIc7z0Va--8KNGcWT8RhvjIXcQfhLjZ-fddbAuSXt8nSb9vmkiOPJmrpH8jD7ha/exec"

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowConfirmation(false)
    setloading(true)
    fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
      .then(res => {
        console.log("SUCCESSFULLY SUBMITTED", res)
        setName('')
        setPhone('')
        setEmail('')
        setPronouns('')
        setMessage('')
        setShowConfirmation(true)
        setloading(false)
      })
      .catch(err => console.log(err))

  }


  return (
    <div className="Contact">
      <div>
        <Menu dark title="Contact Wick" />
        <MobileDrawer dark />
        <form method="post" ref={formRef} onSubmit={handleSubmit} name="google-sheet" className="Contact-form">
          <h1 className="Contact-header">Contact Wick</h1>
          <div>
            <label>
              Name:
              <input type="" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} /></label>
            <label>Email:
              <input className="Contact-input" type="email" name="email" placeholder='name@email.com' onChange={(e) => setEmail(e.target.value)} value={email} />

            </label>
            <label>
              Phone:
              <input className="Contact-input" type="telephone" name="phone" placeholder='XXX-XXX-XXXX' onChange={(e) => setPhone(e.target.value)} value={phone} />
            </label>
            <label>
              Pronouns:
              <input className="Contact-input" type="" name="pronouns" placeholder='she/he/them' onChange={(e) => setPronouns(e.target.value)} value={pronouns} />
            </label>
            <label>
              Tell us a little about what you are looking for:
              <textarea className="Contact-textarea" name="message" rows="4" onChange={(e) => setMessage(e.target.value)} value={message} />
            </label>

            <div className='Contact-submit'>
              <input className="Contact-submit-button" type="submit" name="submit inquiry" value="Submit" />
            </div>
          </div>

        </form>
        <div className="Contact-loadingContainer">
          {loading && <img className="Contact-loading" src={loadingGif} alt="loading" />}
          {showConfirmation && <h1>Thank you for submitting an inquiry! We will respond to you shortly!</h1>}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact;
