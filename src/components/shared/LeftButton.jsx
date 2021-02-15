import React from 'react'
import './styles/leftButton.scss'

export default function Button({value, width, height, disabled, submit, onClick }){

	React.useEffect( () => {
		window.scrollTo({top: 0})
	})
	return(
		<button 
			onClick={onClick}
			disabled={disabled ? disabled : false}
			className="button-left" 
			style={{
				width: width || "100px",
				height: height || "50px",
			}}
		>{  submit && disabled ? "Done" : value }</button>
	)
}