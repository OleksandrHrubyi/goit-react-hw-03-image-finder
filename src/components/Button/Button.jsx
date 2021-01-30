import styles from "./button.module.css";
import PropTypes from "prop-types";

function ButtonLoad({ name, onClick }) {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      {name}
    </button>
  );
}

ButtonLoad.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonLoad;
