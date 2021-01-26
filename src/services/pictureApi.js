const BASE_URL = 'https://pixabay.com/api';
const KEY = '19172745-dc53377293ec5b56fbdc242bd';
export const PER_PAGE = 12;

function fetchPicturesApi (name, page) {
    return fetch(`${BASE_URL}/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
    .then( res => { 
        if( res.ok ) { 
            return res.json()
        }
        return Promise.reject(new Error('Something go wrong, try again'))})
}

const api = {fetchPicturesApi}

export default api