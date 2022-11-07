import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import styles from './singlepost.module.css'
import postService from '../../services/posts'
import { Button, TextField } from '@mui/material';

const SinglePostWrapper = styled.div`
    width: 70%;
    margin: 10px auto;
    padding: 20px 0;
    background-color: #dcdcdc7a;
    height: 100%;
    border-radius: 15px
`
const SinglePostTitle = styled.h1`
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    padding-left: 25px;
`



const SinglePostPage = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const [editMode, setEditMode] = useState(false)
    const [newHome, setNewHome] = useState('')
    const [newAway, setNewAway] = useState('')
    const [newDate, setNewDate] = useState()
    const [newTime, setNewTime] = useState('')
    const [newGame, setNewGame] = useState(false)
    const [newGoalH, setNewGoalH] = useState('')
    const [newGoalA, setNewGoalA] = useState('')
    const [newScorersH, setNewScorersH] = useState('')
    const [newScorersA, setNewScorersA] = useState('')

    useEffect(() => {
        postService.getPost(id).then(res => setPost(res.data))
    }, [])

    const handleEditMode = () => {
        setEditMode(true)
        setNewHome(post.home)
        setNewAway(post.away)
        setNewDate(post.date)
        setNewTime(post.time)
        setNewGame(post.game)
        setNewGoalH(post.goalH)
        setNewGoalA(post.goalA)
        setNewScorersH(post.scorersH)
        setNewScorersA(post.scorersA)
    }

    const changePost = (e) => {
        axios.patch(`http://localhost:3001/posts/${id}`, {
            home : newHome,
            away : newAway,
            date : newDate,
            time : newTime,
            game : newGame,
            goalH: newGoalH,
            goalA: newGoalA,
            scorersH: newScorersH,
            scorersA: newScorersA
        }).then(res => {
            setEditMode(false)
            setPost(res.data)
        })
    }
    const deletePost = () => {
        axios
            .delete(`http://localhost:3001/posts/${id}`)
            .then( res => { 
                window.location.href = "/"
            })
    }

    return (
        <SinglePostWrapper>
                        <div className={styles['post-header']}>
                            {
                                editMode ? (
                                    <div className='text-field'>
                                    <TextField
                                        variant='outlined'
                                        type='text' 
                                        label='club'
                                        value={newHome}
                                        onChange={e => setNewHome(e.target.value)}
                                        />
                                        <TextField
                                        variant='outlined'
                                        type='text' 
                                        label='club'
                                        value={newAway}
                                        onChange={e => setNewAway(e.target.value)}
                                        />
                                        <TextField
                                        variant='outlined'
                                        type='number' 
                                        value={newGoalH}
                                        onChange={e => setNewGoalH(e.target.value)}
                                        /><TextField
                                        variant='outlined'
                                        type='number' 
                                        value={newGoalA}
                                        onChange={e => setNewGoalA(e.target.value)}
                                        />
                                    <Button variant="contained" color="success" onClick={e => changePost(e)} >Сохранить</Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className='title-match'>
                                        <SinglePostTitle>{post.home}</SinglePostTitle><h2>VS</h2><SinglePostTitle>{post.away}</SinglePostTitle>
                                        </div>
                                            <div className={styles['score-matches']}>   
                                            <p>{post.goalH}</p><p>-</p><p >{post.goalA}</p>
                                            </div> 
                                            <div className="button-wrapper">
                                                <Button variant="contained" color="success" onClick={handleEditMode} >Редактировать</Button>
                                                <Button variant="contained" color="error" onClick={deletePost} >Удалить</Button>
                                            </div>
                                    </>
                                )
                            }
                        </div>
                {
                    editMode ? (
                        <div className={styles['post-info']}>
                        <TextField
                        variant='outlined'
                        type='date'
                        label='Date'
                        value={newDate}
                        onChange={e => setNewDate(e.target.value)}
                        />
                        <TextField
                        variant='outlined'
                        type='time'
                        value={newTime}
                        onChange={e => setNewTime(e.target.value)}
                        />
                        { newGame? (
                            <Button variant='outlined' color="error" onClick={e => setNewGame(false)} >Матч закончен</Button>
                        ) : (
                            <Button variant='outlined' color="success" onClick={e => setNewGame(true)} >Матч еще не сыгран</Button>
                            )}
                        </div>
                            ) : (
                                <div className={styles['post-time']}>
                                    <p className={styles.date}> {post.date} </p>
                                    <p className={styles.time}> {post.time} </p>
                                </div>
                            )
                        }
                        <div className={styles['dop-info']}>
                            <p >Отличившиеся игроки</p>
                            <div className={styles['descr-info']}>
                                <div className={styles['left-score']}>
                                    <p>
                                        {post.scorersH}
                                    </p>
                                </div>
                                <div className={styles['right-score']}>
                                    <p>
                                        {post.scorersA}
                                    </p>
                                </div>
                            
                            </div>
                        </div>
                        
                        
                        
        </SinglePostWrapper>
    );
};

export default SinglePostPage;