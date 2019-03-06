import axios from 'axios';

export const writePost = ({title, content, tags}) => {
    const userId = 0;
    axios.post('/api/posts/write', {title, content, tags, userId} )
    .then(response => {
        console.log("response : ", response)
    })
    .catch( err => {
        console.log('err : ', err)
    })
}