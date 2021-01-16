import React from 'react'
import './styles/fullscreengallery.scss'
import Arrow from '../../icons/Arrow'
import Exit from '../../icons//Exit'

export default function FullScreenGallery({ current, setShow, setCurrent, array, show }) {


    const [ isLeftArrow, setIsLeftArrow ] = React.useState(true)
    const [ isRightArrow, setIsRightArrow ] = React.useState(true)
    const galleryRef = React.useRef(null)

    const next = () => {
        let i = current.id
        setIsLeftArrow( true )

        if( i >= array.length ) return
        if( i >= array.length - 1 ) setIsRightArrow( false )
        setCurrent( array[current.id] )
    }

    const prev = () => {
        let i = current.id
        setIsRightArrow( true )

        if( i <= 1 ) return
        if( i <= 2 ) setIsLeftArrow( false )

        setCurrent( array[current.id - 2] )
    }


    React.useEffect(() => {
        if( current.id <= 1) setIsLeftArrow( false )
        if( current.id >= array.length ) setIsRightArrow( false )
        
    },[array, current, galleryRef ])


    return(
        <>
        <div className="fs-overlay" onClick={ () =>setShow( false )}>
        </div>
        <div className="fs-gallery" ref={galleryRef}>
            <div className="exit-icon" onClick={ () => setShow(!show)}>
                <Exit width={30} height={30} fill="rgba(255, 255, 255, 0.3)" />
            </div>
            <div className="fs-left-arrow" onClick={prev} ><Arrow width={35} height={35} fill={ isLeftArrow ? "#fff" : "#333"}/></div>
            <div className="fs-right-arrow"  onClick={next} ><Arrow width={35} height={35} fill={ isRightArrow ? "#fff" : "#333"} /></div>
            <div className="fs-current">
                <img src={ current.url } alt="gallery" />
            </div>
        </div>
        </>
    )
} 