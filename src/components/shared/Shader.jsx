export default function({ opacity, zindex, children }) {

	return (
		<div style={{
			position: "absolute",
			width: "100%",
			height: "100%",
			zIndex: zindex || "9999",
			background: `rgba(0, 0, 0, ${opacity})`,
		}}>
			{children}
		</div>
	)
}