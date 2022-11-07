import React , {useState} from 'react';
import Button from '@mui/material/Button';
import postService from '../../services/posts'
import TextField from '@mui/material/TextField';
import './create.css'



const CreatePost = () => {
    const [home, setHome] = useState('')
    const [away, setAway] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [game, setGame] = useState('')
  


    const addPost = (e) => {
        e.preventDefault()
        
        const newPost = {
            home,
            away,
            date,
            game : true,
            time
        } 
        
        postService
          .createPost(newPost)
            .then(res => {
              console.log(res)
              setHome('')
              setAway('')
              setDate()
              setTime()})
            .catch(err => console.log(err))
    }

   
    return (
        <div className='form-wrapper'>
            
            <form onSubmit={addPost} >
            <div className='create-title'>
                <h1>Создать пост</h1>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" alt="" />
            </div>
                <TextField 
                  label="Дома" 
                  variant="outlined" 
                  type="text"
                  value={home}
                  onChange={e => setHome(e.target.value)}
                  />
                  <TextField 
                  label="В гостях" 
                  variant="outlined" 
                  type="text"
                  value={away}
                  onChange={e => setAway(e.target.value)}
                  />
                <TextField  
                  variant="outlined" 
                  type="date" 
                  value={date} 
                  onChange={e => setDate(e.target.value)} 
                  />
                  <TextField  
                  variant="outlined" 
                  type="time" 
                  value={time} 
                  onChange={e => setTime(e.target.value)} 
                  />
                  <Button type="submit" variant="contained">
                    Отправить
                  </Button>
            </form>
            
        </div>
    );
};

export default CreatePost;