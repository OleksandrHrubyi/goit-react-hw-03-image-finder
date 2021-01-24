import styles from '../SearchBar/searchBar.module.css';
import React,{Component} from 'react';
import { toast } from 'react-toastify';

class SearchBar extends Component {

    state ={
        value: '',
    }


    handleOnChangeInput =(event) =>{
       this.setState({value: event.currentTarget.value})
       
    }

    handleOnSubmit =(event) => {
        event.preventDefault();
        if(this.state.value.trim() === ''){
            return toast.info('Enter pictures name')
        }
        this.props.onSubmit(this.state.value)
    }






    render(){
       return <header className={styles.searchbar}>
           
           <form className={styles.searchForm} onSubmit = {this.handleOnSubmit}>
               <button type="submit" className={styles.searchFormButton}>
                   <span className={styles.searchFormButtonLabel}>Search</span>
                   </button>
                   
                   <input onChange ={this.handleOnChangeInput}
                   className={styles.input}
                   type="text"
                   autoComplete="off"
                   autoFocus
                   placeholder="Search images and photos"
                   value ={this.state.value}
                   />
                   </form>
                   </header>
    }

}


export default SearchBar
