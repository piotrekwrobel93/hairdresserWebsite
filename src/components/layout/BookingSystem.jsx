import React from 'react'
import Button from '../shared/Button'
import LeftButton from '../shared/LeftButton'
import ScissorsIcon from '../../icons/Scissors'
import ExitIcon from '../../icons/Exit'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import '../../styles/booking.scss'
import RelaxIcon from '../../icons/Relax'
// 
import {BookingContext} from '../../context/context'



export default function BookingSystem() {

    // STATE, VARIABLES, REFS
    const [ stage, setStage ] = React.useState(1)
    const [ date, setDate ] = React.useState( new Date() )
    const [ name, setName ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ contact, setContact ] = React.useState('')
    const [ formError, setFormError ] = React.useState('')
    const [ isAvailableDate, setIsAvailableDate ] = React.useState(false)
    const [ selectedTime, setSelectedTime ] = React.useState()
    const [ hasCompletedBooking ] = React.useState( JSON.parse(localStorage.getItem("token")) || false )
    //
    const { showBooking, setShowBooking, setShowBookingIcon } = React.useContext(BookingContext)
    const timesRef = React.useRef(null)


    React.useEffect( () => {
        if (hasCompletedBooking) {
            setStage(5)
        }
    }, [stage, hasCompletedBooking])

    // METHODS
    const validateStage = stage => {
        if (stage === 1) {
            const nameRegEx = new RegExp("^[a-zA-Z]+$")
            const emailRegEx = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
            const contactRegEx = new RegExp('^[0-9]')
            // NAME VALIDATION
            if (!name || name.length < 3 ) {
                setFormError("Name must be at least 3 characters long")
                return false
            }
            if (!nameRegEx.test(name)) {
                setFormError('Name must contain only letters')
                return false
            }
            // EMAIL VALIDATION
            if ( !email || email.length < 3 || !emailRegEx.test(email)) {
                setFormError("Email adress isn't correct")
                return false
            }
            // CONTACT VALIDATION
            if (!contact || contact.length < 10 || contact.length > 14 || !contactRegEx.test(contact)) {
                setFormError("Contact number isn't correct. Must be UK format")
                return false 
            }
            setFormError('')
            return true
        }

        if (stage === 2) {
            if (!selectedTime) {
                setFormError("Select date and time")
                return false
            }
            setFormError('')
            return true
        }
    }


    const handleNextClick = event => {
        event.preventDefault()
        if (stage > 2) {
            return
        }

        if (validateStage( stage )) {
            setStage( stage + 1)
        }

    }

    const handleTimeClick = event => {
        
        const { innerText } = event.target
        const times = Array.from(timesRef.current.children)

        setSelectedTime( innerText)
        times.forEach( time => {
            time.classList.remove("current-time")
            event.target.className = 'current-time'
        })
    }
    const handleBackClick = event => {
        event.preventDefault()
        setStage( stage - 1)
    }

    const handleConfirm = () => {
        localStorage.setItem("token", JSON.stringify(true))
        setShowBookingIcon( false )
        setStage(stage + 1)
    }
    
    const handleSelect = () => {
        // We would ask server to check if date is available and get booking times for this day etc
        // For this project I am focusing only on front-end part
        setIsAvailableDate(true)
    }

    return(
        <>
            {showBooking &&  (
                <div className="booking-system">
                    <div className="booking-exit-icon"><ExitIcon width={20} height={20} /> </div>
                    <div className="booking-trigger" onClick={ () => setShowBooking(!showBooking)}></div>
                    <div className="booking">
                        <div className="booking-header">
                        <span className="form-error">{formError}</span>
                            <ScissorsIcon width={30} height={30} fill="red" />
                            <h1>Booking</h1>
                        </div>
                        <div className="booking-form">
                            {
                                !hasCompletedBooking  && (
                                    <>
                                    {
                                        stage === 1 && (
                                            <>
                                                <p>Fill all fields to complete the booking</p>
                                                <form>
                                                    <input type="text" placeholder="Your Name" onChange={ event => setName(event.target.value)} value={name} />
                                                    <input type="email" placeholder="Your Email" onChange={ event => setEmail(event.target.value)} value={email} />
                                                    <input type="telephone" placeholder="Your Contact Number" onChange={ event => setContact(event.target.value)} value={contact} />
                                                    <Button onClick={handleNextClick} value="Next" width={200}  />
                                                </form>
                                            </>
                                        )
                                    }
                                    {
                                        stage === 2 && (
                                                <div className="booking-form-2">
                                                    <p>Select Date</p>
                                                    <div className="d-p">
                                                        <DatePicker selected={date} onChange={prev => setDate(prev)} dateFormat='dd/MM/yyyy' onSelect={handleSelect}/>
                                                    </div>
                                                    <>
                                                    { isAvailableDate && (
                                                        <>
                                                            <p className="select-time">Select Time</p>
                                                            <div className="times" ref={timesRef}>
                                                                <p onClick={event => handleTimeClick(event)}>9:30</p>
                                                                <p onClick={event => handleTimeClick(event)}>10:00</p>
                                                                <p onClick={event => handleTimeClick(event)}>12:30</p>
                                                                <p onClick={event => handleTimeClick(event)}>13:00</p>
                                                                <p onClick={event => handleTimeClick(event)}>14:30</p>
                                                                <p onClick={event => handleTimeClick(event)}>15:00</p>
                                                                <p onClick={event => handleTimeClick(event)}>16:00</p>
                                                            </div>
                                                            </>
                                                    )}
                                                    </>
                                                    <div className="buttons">
                                                        <LeftButton onClick={handleBackClick} value="Back" left width={200} />
                                                        <Button onClick={handleNextClick} value="Next" width={200} />
                                                    </div>
                                                </div>
                                        )
                                    }
                                    {
                                        stage === 3 && (
                                            <div className="booking-form-3">
                                                <h4>Please confirm the details below</h4>
                                                <h1>Confirmation</h1>
                                                <h3 className="booking-form-3--date">Date: <span>{ date.toLocaleDateString() }</span></h3>
                                                <h3 className="booking-form-3--time">Time: <span>{ selectedTime }</span></h3>
                                                <div className="booking-form-3--details">
                                                    <h3>Details:</h3>
                                                    {
                                                        name && email && (
                                                            <>
                                                                <h4>Name:<span>{ name }</span></h4>
                                                                <h4>Email:<span>{ email }</span></h4>
                                                            </>
                                                        )
                                                    }
                                                    <h4>Contact: <span>{contact}</span></h4>
                                                </div>
                                                <div className="buttons">
                                                    <LeftButton onClick={handleBackClick} value="Back" left width={200} />
                                                    <Button onClick={handleConfirm} value="Confirm" width={200} />
                                                </div>
                                            </div>
                                        )
                                    }

                                </>
                                )
                            }
                                                                {
                                        stage === 4 && (
                                            <div className="booking-form-4">
                                                <h1>Thank you!</h1>
                                                <h3>Your booking is set</h3>
                                                <h3>See you!</h3>
                                                <div className="confirmation-svg">
                                                    <RelaxIcon width={250} height={250} />
                                                </div>
                                                <Button value="Close" onClick={ (e) => { e.preventDefault(); setShowBooking(!showBooking); setStage(5) }}/>
                                            </div>
                                        )
                                    }
                                    {
                                        stage === 5 && (
                                            <div className="booking-form-5">
                                                <h1>Relax and dont worry!</h1>
                                                <h3>We will text you to confirm your booking day before</h3>
                                                <h3>See you!</h3>
                                                <div className="confirmation-svg">
                                                    <RelaxIcon width={ window.innerWidth > 480 ? 250 : 200} height={ window.innerWidth > 480 ? 250 : 200} />
                                                </div>
                                                <Button value="Close" onClick={ (e) => { e.preventDefault();setShowBooking(!showBooking); }}/>
                                            </div>
                                        )
                                    }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}