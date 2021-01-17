import React from 'react'
import './styles/button.scss'

export default function Button({value, width, height, disabled, submit }){

	React.useEffect( () => {
		window.scrollTo({top: 0})
	})
	return(
		<button 
			disabled={disabled ? disabled : false}
			className="button" 
			style={{
				width: width || "100px",
				height: height || "50px"
			}}
		>{  submit && disabled ? "Done" : value }</button>
	)
}