import styles from './imageGalleryItem.module.css';



function ImageGalleryItem ({picture, onClick}) {



    
    return <li className={styles.imageGalleryItem}>
              <img onClick ={onClick} src={picture.webformatURL} data-large ={picture.largeImageURL} data-name ={picture.tags}
               alt={picture.tags} className={styles.imageGalleryItemImage}/>
     </li>
     
     
   
}



export default ImageGalleryItem



