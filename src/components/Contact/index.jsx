import React from 'react'
// ASSETS
import Button from '../shared/Button'
import NumberFormat from 'react-number-format';
import Modal from '../shared/Modal'
// OTHER
import './contact.scss'



export default function Contact() {
    // STATE AND VARIABLES
    const [ textareaValue, setTextareaValue ] = React.useState("")
    const [showModal, setShowModal ] = React.useState( false )
    const [ isSubmited, setIsSubmited ] = React.useState( false )
    const [ email, setEmail ] = React.useState('')
    const [ name, setName ] = React.useState('')
    const [ number, setNumber ] = React.useState('')
    const clearForm = () => {
        setNumber('')
        setName('')
        setEmail('')
        setTextareaValue('')
    }   

    const handleSubmit = event => {
        event.preventDefault()
        setShowModal( true )
        setIsSubmited( true )
        clearForm()        
    }
    // 
    const formRef = React.useRef( null ) 


    // JSX
    return (
        <div className="contact">
            { showModal && <Modal />}
            <h1>Write to us</h1>
            <p>We’re here to help and answer any question you might have. We look forward to hearing from you</p>
            <div className="contact-form">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="form-inputs">
                        <input type="text" placeholder="Name & Surname" required value={name} onChange={ e => setName( e.target.value )}/>
                        <input type="email" placeholder="Email" required value={email}onChange={ e => setEmail( e.target.value )} />
                        <NumberFormat  placeholder="Phone Number" format="#####-###-###" value={number} onChange={ e => setNumber( e.target.value )} />
                    </div>
                    <textarea placeholder="Your message" value={textareaValue} onChange={ (e) => { setTextareaValue( e.target.value ) }}>
                    </textarea>
                    <div className="form-button">
                        <Button width={150} height={50} value="Send" disabled={ isSubmited } submit />
                    </div>
                </form>
            </div>
        </div>
    )
}