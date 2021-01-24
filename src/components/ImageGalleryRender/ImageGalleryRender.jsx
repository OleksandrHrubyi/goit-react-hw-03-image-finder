import React,{ Component } from 'react';
import styles from './ImageGaleryRender.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from '../Modal/Modal'
import { toast } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGalary';
import ButtonLoad from '../Button/Button'
import  picturesApi  from '../../services/pictureApi.js'




let counter = 1;

class ImageGalleryRender extends Component {
    state ={
        pictures: null,
        error: null,
        status: 'idle',   
        isModal: false,
        name: '',
        src: '',
        
    }


componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
    
  
}

componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
}


    componentDidUpdate(prevProps, prevState){
        if(prevProps.pictureName !== this.props.pictureName)
        {
            this.setState({
                status: 'pending'
            })


            picturesApi.fetchPicturesApi(this.props.pictureName, counter = 1)
            .then((res) => { if( res.hits.length === 0 ){ toast('We did not find any pictures') } return this.setState({pictures: res.hits, status: 'resolve'})})
            .catch(error => this.setState({error, status: 'rejected'}))
            
        }
      


        
    }


    handleLoadMore = (event) => {
         picturesApi.fetchPicturesApi(this.props.pictureName, counter += 1)
        .then((res) => { return this.setState((prevState) => {
            return{pictures: [...prevState.pictures, ...res.hits]}
        })})
        .catch(error => this.setState({error, status: 'rejected'})).finally(()=>{this.scroll()})

       
    }

    scroll  =() =>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
    }

    handleKeyDown =(event) => {
        if(event.code === 'Escape')
        {
            this.setState({isModal: false})
        }
    }

   handleOnClick =(event) => {
       this.setState({isModal: true,
        src: event.currentTarget.dataset.large,
        name: event.currentTarget.dataset.name})
       
   }

   handleOnClickModal = (event) => {

       if(event.currentTarget === event.target)
       {
          
        this.setState({isModal:false})
       }
       
   }


    render (){
        const {pictures, error, status, isModal, name, src} = this.state;
        
        if(status === 'idle')
        {
          return <></>}

        if ( status ==='pending' )
        {
           return <Loader className ={styles.loader} type="ThreeDots" color="#00BFFF" height={80} width={80}  />
        }

        if ( status === 'resolve' ){

          return <ImageGallery pictures ={pictures} onClick ={this.handleOnClick} >{isModal && <Modal handleOnClickModal ={this.handleOnClickModal} src ={src} name ={name}/>}{pictures.length >= 12 && <ButtonLoad onClick ={this.handleLoadMore} name ="load more"/>} </ImageGallery>
              
        }
        
        if(status === 'rejected')
        {
            return <h1>{error.message}</h1>
        }

        
    
 }

}





export default ImageGalleryRender