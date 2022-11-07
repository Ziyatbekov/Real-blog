import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='title'>
                <img src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg" className='real-img' alt="" />
                <img src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/parche_champions_14.png" className='ucl-img' alt="" />
            </div>
            <nav>
                <Button variant="contained" href="#outlined-buttons">
                    <Link to="/">Главная</Link>
                </Button>
                <Button variant="contained" href="#outlined-buttons">
                    <Link to="/about">О клубе</Link>
                </Button>
                <Button variant="contained" href="#outlined-buttons">
                    <Link to="/createpost">Создать пост</Link>
                </Button>
                <Button variant="contained" href="#outlined-buttons">
                    <Link to="/register">Регистрация</Link>
                </Button>
                <Button variant="contained" href="#outlined-buttons">
                    <Link to="/login">Логин</Link>
                </Button>

            </nav>
        </div>
    );
};

export default Header;