import React, { useContext } from 'react'
import {BookingContext} from '../../context/context'
import BookingIcon from '../../icons/Booking'
import BookingSystem from './BookingSystem';
import '../../styles/booking.scss'
import { gsap } from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { isMobile } from '../../utils'

export default function Booking() {

    // STATES
    const bookingIconRef = React.useRef( null )
    // CONTEXT
    const {showBooking, showBookingIcon, setShowBooking}  = useContext( BookingContext )

    // METHODS
    const handleClick = () => setShowBooking( !showBooking )

    // EFFECTS
    React.useEffect( () => {
        if (typeof window !== 'undefined') gsap.registerPlugin( ScrollTrigger )
        if (isMobile === false || window.innerWidth > 791) {
            ScrollTrigger.create({
                trigger: bookingIconRef.current,
                start: "bottom bottom",
                onLeave: () => gsap.to( bookingIconRef.current, { top: "93%", fill: "#000", width: "40px", height: "40px", rotate: 360}),
                onEnterBack: () => gsap.to( bookingIconRef.current, { top: "2%", fill: "#222", width: "30px", height: "30px", rotate: -360})
            })
        }
    },[])

    
    return(
        <   >
        {
            showBookingIcon &&
            <div className="booking-icon" ref={ bookingIconRef } >
                <BookingIcon onClick={ event =>  {event.preventDefault();handleClick() }} />
            </div>
        }
            <BookingSystem />
        </>
    )
}