import styles from './imageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';




function ImageGalary({ pictures, onClick, children}) {
    return <>
              <ul className={styles.imageGallery}> {
                  pictures.map((picture) => {
                      return <ImageGalleryItem key = {picture.id} onClick ={onClick} picture ={picture}/>})}
             </ul>
           {children}
           

           </>
}


export default ImageGalary




