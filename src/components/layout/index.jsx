import React from 'react'
import Navbar from './Navbar'

import '../../styles/layout.scss'
import Footer from './Footer'
import Booking from './Booking'

export default function Layout({ children }) {


	// JSX

	return(
			<div className="layout">
				<Navbar />
				{children}
				<Booking />
				<Footer />
			</div>
	)
}