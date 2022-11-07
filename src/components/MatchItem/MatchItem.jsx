import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MatchItem = (props) => {

    return (
        <>
        {props.game == false ? (
            <div className='match-item past' >
            <Link to={`/posts/${props.id}`} className='left-button' >
                <div className='left-block'>
                
                    <div className="clubs">
                        <p>{props.home} </p>
                        <p className='vs'> VS </p>
                        <p>{props.away}</p>
                    </div>
                        <div className='scores' >
                        <p>{props.goalH}</p>
                        <p>:</p>
                        <p>{props.goalA}</p>
                        </div>
                </div>
                </Link>
                <div className="time">
                    <p> {props.date} </p>
                    <p> {props.time} </p>
                </div>
                
                
                </div>

        ): (
            <div className='match-item before' >
            <Link to={`/posts/${props.id}`} className='left-button' >
                <div className='left-block'>
                
                    <div className="clubs">
                        <p>{props.home} </p>
                        <p className='vs'> VS </p>
                        <p>{props.away}</p>
                    </div>
                </div>
                </Link>
                <div className="time">
                    <p> {props.date} </p>
                    <p> {props.time} </p>
                </div>
                
                
                </div>

        ) }
        
        </>  
    );
};

export default MatchItem;