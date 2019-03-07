import axios from 'axios';

// export const writePost = ({title, content, tags}) => {
//     const userId = 0;
//     axios.post('http://101.101.166.29:4000/api/posts/write', {title, content, tags, userId} )
//axios.post('http://localhost:4000/api/posts/write', {"title" : ":)", "content":"웃쟈", "tags":"태그다", "userId":0 } )
//     .then(response => {
//         console.log("response : ", response)
//     })
//     .catch( err => {
//         console.log('err : ', err)
//     })
// }

// 포스트 쓰기 
export const writePost = ({title, content, tags, userId=0}) => 
    axios.post(
        //'http://101.101.166.29:4000/api/posts/write', 
        '/api/posts/write',
        { title, content, tags, userId } 
    )

// 포스트 읽기
export const getPost = (id) => axios.get(`/api/posts/${id}`);
    
    

