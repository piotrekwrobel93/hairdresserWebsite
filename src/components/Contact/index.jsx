import React from 'react'
import './contact.scss'
import Button from '../shared/Button'
import NumberFormat from 'react-number-format';
import Micro from '../../icons/Micro'


export default function Contact() {


    const [ isListening, setIsListening ] = React.useState( false )
    const [ textareaValue, setTextareaValue ] = React.useState("")

    
    return (
        <div className="contact">
            <h1>Write to us</h1>
            <p>We’re here to help and answer any question you might have. We look forward to hearing from you</p>
            <div className="contact-form">
                <form>
                    <div>
                        <input type="text" placeholder="Name & Surname" required />
                        <input type="email" placeholder="Email" required />
                        <NumberFormat  placeholder="Phone Number" format="#####-###-###"/>
                    </div>
                        <textarea placeholder="Your message" value={textareaValue} onChange={ (e) => { setTextareaValue( e.target.value ) }}>
                        </textarea>
                        <div className="form-button">
                            <Button width={150} height={50} value="Send"/>
                        </div>
                </form>
            </div>
        </div>
    )
}