import React from 'react'
import './styles/modal.scss'
import {gsap } from 'gsap'

export default function Modal() {

    React.useEffect( () => {
        gsap.from( modalRef.current , { y: -300, opacity: 0 })
        const out = setTimeout( () => {
            gsap.to( modalRef.current, { y: "-100%", opacity: 0})
        }, 3000)

        return( () => clearTimeout( out ))
    }, [])

    const modalRef = React.useRef( null )
    return(
        <div className="modal" ref={modalRef}>
            <h3>Thank you! All done.</h3>
            <p>We will get back to you soon!</p>
        </div>
    )
}