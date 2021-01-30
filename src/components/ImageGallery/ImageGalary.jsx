import styles from "./imageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

function ImageGalary({ pictures, onClick, children }) {
  return (
    <>
      <ul className={styles.imageGallery}>
        {" "}
        {pictures.map((picture) => {
          return (
            <ImageGalleryItem
              key={picture.webformatURL}
              onClick={onClick}
              picture={picture}
            />
          );
        })}
      </ul>
      {children}
    </>
  );
}

ImageGalary.propTypes = {
  pictures: PropTypes.array,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ImageGalary;
