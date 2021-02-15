export default function BookingIcon({ width, height, fill, onClick, reff }) {
    return (
        
<svg xmlns="http://www.w3.org/2000/svg" width={ width || "24" } ref={ reff } height={ height || "24"} viewBox="0 0 24 24" onClick={ onClick }>
    <path fill={ fill || "#000"} d="M14 13h-4v-4h4v4zm6-4h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v13.386c0 2.391-6.648 9.614-9.811 9.614h-14.189v-23h24zm-2 6h-20v15h11.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-6.543z"/>
</svg>
    )
}