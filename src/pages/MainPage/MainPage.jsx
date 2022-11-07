import React, {useEffect, useState} from 'react';
import './mainPage.css';
import MatchItem from '../../components/MatchItem/MatchItem';
import axios from 'axios'
import postService from '../../services/posts'
import { Button } from '@mui/material';


const MainPage = () => {
    const [posts, setPosts] = useState([])
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        postService
          .getPosts()
            .then(res => setPosts(res.data))
      }, [])

    const deletePost = (id) => {
        axios
            .delete(`http://localhost:3001/posts/${id}`)
            .then(res => {
            setPosts(posts.filter(post => post.id !== id
            ))
            })
    }
    
    
    const filteredPosts = showAll ? posts : posts.filter(post => post.game === false)

    

    return (
        <div className='all-matches'>
            <h1>Матчи</h1>
            <Button onClick={() => setShowAll(!showAll)} variant="contained" >{showAll ? 'Законченные' : 'Все' } матчи</Button>
            <div className='match_list'>
                {
                    filteredPosts.map(match => {
                        return (
                            <MatchItem
                                key={match.id}
                                id={match.id}
                                home={match.home}
                                away={match.away}
                                game={match.game}
                                date={match.date}
                                time={match.time}
                                status={match.status}
                                goalH={match.goalH}
                                goalA={match.goalA}
                                deletePost={() => deletePost(match.id)}
                            />
                        )
                    })

                }
            </div>
        </div>
    );
};

export default MainPage;