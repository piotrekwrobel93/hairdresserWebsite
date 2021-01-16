export default function Arrow({width, height, fill}) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg"  width={width || "24"} height={ height || "24" } viewBox="0 0 24 24"><path fill={fill || "#fff"} d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg>
	)
}