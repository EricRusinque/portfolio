import React from 'react';
import { Portfolio, Nav, Header,Experience,Footer, Contact, About } from './components/exports'
import './index.css'



export const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}
