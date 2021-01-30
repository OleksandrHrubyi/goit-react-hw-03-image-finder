import styles from "./modal.module.css";
import PropTypes from "prop-types";

function Modal({ src, name, handleOnClickModal }) {
  return (
    <div
      id="modal-root"
      onClick={handleOnClickModal}
      className={styles.overlay}
    >
      <div className={styles.modal}>
        <img className={styles.img} src={src} alt={name} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleOnClickModal: PropTypes.func,
};

export default Modal;
