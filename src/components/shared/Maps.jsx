import React from 'react'


export default () => {

	return(
		<React.Fragment>
			<div className="maps" style={{width: "100vw" ,backgroundColor: 'transparent', filter: "grayscale(100%)"}}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.6367972848157!2d-2.098700083912184!3d57.14327129136213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDA4JzM1LjgiTiAywrAwNSc0Ny40Ilc!5e0!3m2!1sen!2suk!4v1609938087422!5m2!1sen!2suk" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" style={{width: "100%", height: "400px"}}></iframe>
			</div>
		</React.Fragment>
	)
}