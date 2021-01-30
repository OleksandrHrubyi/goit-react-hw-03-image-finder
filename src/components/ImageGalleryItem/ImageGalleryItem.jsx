import styles from "./imageGalleryItem.module.css";
import PropTypes from "prop-types";

function ImageGalleryItem({ picture, onClick }) {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        onClick={onClick}
        src={picture.webformatURL}
        data-large={picture.largeImageURL}
        data-name={picture.tags}
        alt={picture.tags}
        className={styles.imageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.ptopTypes = {
  picture: PropTypes.object,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
