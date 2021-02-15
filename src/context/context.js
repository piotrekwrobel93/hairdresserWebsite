import React from 'react'

export const BookingContext = React.createContext() 


export default function BookingContextProvider({children}) {
    const [ showBooking, setShowBooking] = React.useState(false)
    const [ showBookingIcon, setShowBookingIcon] = React.useState(!JSON.parse(localStorage.getItem('token')))

    const values = {
        showBooking,
        setShowBooking,
        showBookingIcon,
        setShowBookingIcon
    }
    return(
        <BookingContext.Provider value={ values }>
            {children}
        </BookingContext.Provider>
    )
}
