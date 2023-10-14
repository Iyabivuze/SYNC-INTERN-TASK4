import './Contact.css'
import Back from '../helpers/Back'

const Contact = () => {
  return (
    <div>
      <Back title="Contact Us"/>
      <div className="contact padding">
        <h1>Fell free to get in touch</h1>
        <form action="">
            <input type="text" name="fname" id=""
                placeholder='Full name'            
            />
            <input type="email" name="email" id=""
                placeholder='Email'            
            />
            <input type="text" name="subject" id=""
                placeholder='Subject'            
            />
            <input type="number" name="number" id=""
                placeholder='Phone number'            
            />
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
