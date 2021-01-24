import styles from './modal.module.css'


function Modal ({src, name, handleOnClickModal}) {

    return <div id ="modal-root" onClick ={handleOnClickModal} className={styles.overlay}>
             <div className={styles.modal}>
                 <img className ={styles.img} src={src} alt={name} />
                 </div>
             </div>
    
}
export default Modal