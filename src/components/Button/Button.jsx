import styles from './button.module.css'

function Button({ name, onClick}) {
    return <button onClick ={onClick} className ={styles.button} type ="button">{name}</button>
}

export default Button