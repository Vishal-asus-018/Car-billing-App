import React from 'react';
import './Home.css'
import logo from "../../assets/logo.jpg"
import { Button, Container } from '@mui/material';
const Home = () => {
    return (
        <div className="home">
            <header>
                <img src={logo} alt="logo" />
                <span>Fasmho Energy</span>
            </header>
            <div className="cnt">
                <Container className="home-box" maxWidth={'md'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='topic'>Welcome to Car Dealership App</div>
                </Container>
                <Button href='./billing' style={{ position: 'absolute', top: '60vh', left: '45vw' }} variant='contained' >Deal Cars </Button>

            </div>
        </div>
    );
}

export default Home;
