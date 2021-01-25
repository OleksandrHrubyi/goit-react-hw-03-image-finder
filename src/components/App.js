import React, {Component} from 'react';
import Container from './Container/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGalleryRender/ImageGalleryRender';



class App extends Component  {
   state ={
        pictureName: '',
    }
    
    handleOnSubmit =(pictureName) => {
        this.setState({pictureName})
    }
    
    render(){
        return <Container>
            <SearchBar onSubmit ={this.handleOnSubmit}/>
            <ImageGallery pictureName ={this.state.pictureName} />
            <ToastContainer/>
            </Container>
            }
}


export default App;