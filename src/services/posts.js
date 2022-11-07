import axios from "axios";
const URL = 'http://localhost:3001/posts'

const getPosts = () => {
    return axios.get(URL)
  }

  
const createPost = (newPost) => { 
    axios.post(URL, newPost)
}

const editPost = (changedPost, id) => {
    return axios.put(`http://localhost:3001/posts/${id}`, changedPost)
  }

const getPost = (id) => {
    return axios.get(`http://localhost:3001/posts/${id}`)
        
  }

  export default {getPosts, createPost, editPost, getPost}