import axios from "axios";
const URL = 'http://localhost:3001/register'

const register = (newUser) => {
    console.log(newUser)
    return axios.post(`${URL}`, newUser)
}

export default {register}
