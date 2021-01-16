import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin( ScrollTrigger )


export const animationHandler = {
	left: ( array, bool ) => {
		return array.forEach( reference => {
			const ref = bool ? reference.current : reference 
			ScrollTrigger.create({
				trigger: ref,
				animation: gsap.from( ref, { x: "-200%", opacity: 0}),
				start: "center 100%"
			})
		})
	},
	right: ( array, bool ) => {
		return array.forEach( reference => {
			const ref = bool ? reference.current : reference 
			ScrollTrigger.create({
				trigger: ref,
				animation: gsap.from( ref, {x: "200%", opacity: 0}),
				start: "center 100%"
			})
		})
	}
}


