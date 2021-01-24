import styles from './button.module.css';
import PropTypes from 'prop-types';

function ButtonLoad({ name, onClick}) {

    return  <button onClick ={onClick} className ={styles.button} type ="button">{name}</button>
}

export default ButtonLoad


ButtonLoad.propTypes ={
    name: PropTypes.string,
    onClick: PropTypes.func,
}