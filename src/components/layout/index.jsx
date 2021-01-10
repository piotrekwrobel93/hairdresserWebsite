import React from 'react'
import Navbar from './Navbar'

import '../../styles/layout.scss'
import Footer from './Footer'


export default ({ children }) => {
	return(
			<div className="layout">
				<Navbar />
				{children}
				<Footer />
			</div>
	)
}