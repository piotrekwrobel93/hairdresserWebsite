import React, { useEffect } from 'react'
import FullScreenGallery from '../shared/FullScreenGallery'
import './gallery.scss'


export default function Gallery() {

    const [ showGallery, setShowGallery ] = React.useState( false )
    const [ currentImg, setCurrentImg ] = React.useState('')

    const galleryArray = [
        { id: 1, url: 'https://images.unsplash.com/photo-1511920922889-5c35bfd95a7f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpcmN1dCUyMHN0eWxlJTIwbWFsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 2, url: 'https://images.unsplash.com/photo-1514336937476-a5b961020a5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmN1dCUyMHN0eWxlJTIwbWFsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 3, url: 'https://images.unsplash.com/photo-1603899968034-1a56ca48d172?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpcmN1dCUyMHN0eWxlJTIwbWFsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 4, url: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aGFpcmN1dCUyMHN0eWxlJTIwbWFsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 5, url: 'https://images.unsplash.com/photo-1518220950441-a7788dff3dd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhaXJjdXQlMjBzdHlsZSUyMG1hbGV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'},
        { id: 6, url: 'https://images.unsplash.com/photo-1523532855831-190c384cb39a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXJjdXQlMjBzdHlsZSUyMG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 7, url: 'https://images.unsplash.com/photo-1578390430804-cb5fea5b1be8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhhaXJjdXQlMjBzdHlsZSUyMG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 8, url: 'https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGhhaXJjdXQlMjBzdHlsZSUyMG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        { id: 9, url: 'https://images.unsplash.com/photo-1598887142533-b915bc96619a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGhhaXJkcmVzc2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        // { id: 10, url: 'https://images.unsplash.com/photo-1598887143038-39282f41256a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMGhhaXJkcmVzc2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        // { id: 11, ulr: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1lbiUyMGhhaXJkcmVzc2VyfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'},
        // { id: 12, ulr: 'https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGhhaXJjdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        // { id: 13, ulr: 'https://images.unsplash.com/photo-1578390432942-d323db577792?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fG1lbiUyMGhhaXJjdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        // { id: 14, ulr: 'https://images.unsplash.com/photo-1568339434357-18719cd7f25b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbiUyMGhhaXJjdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        // { id: 15, ulr: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1lbiUyMGhhaXJjdXR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'},
    ]


    const handleAnimation = node => {
        setShowGallery( true)
        setCurrentImg( node )
    }

    useEffect( () => {
      
        if( showGallery ) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    },[ showGallery ,currentImg])


    return (
        <div className="gallery">
            <h1>See some of our Art!</h1>
            <p>Be part of it</p>

            <div className="gallery-grid">
                {
                    galleryArray.map( (image, index) => (
                        <div key={image.id} className="gallery-image" id={`image${image.id}`} onClick={ () => handleAnimation( image )}  >
                            <img src={image.url} alt="gallery"  />
                        </div>
                    ))
                }
            </div>
            { showGallery && (
                <FullScreenGallery current={ currentImg } setCurrent={setCurrentImg} show={showGallery} setShow={setShowGallery} array={galleryArray}>
                </FullScreenGallery>
            )}
        </div>
    )
}