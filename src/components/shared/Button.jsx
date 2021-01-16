import React from 'react'
import './styles/button.scss'

export default function Button({value, width, height}){

	React.useEffect( () => {
		window.scrollTo({top: 0})
	})
	return(
		<button 
			className="button" 
			style={{
				width: width || "100px",
				height: height || "50px"
			}}
		>{ value }</button>
	)
}