import './styles/button.scss'

export default function({value, width, height}){
	return(
		<button className="button" style={{
			width: width || "100px",
			height: height || "50px"
		}}>{ value }</button>
	)
}