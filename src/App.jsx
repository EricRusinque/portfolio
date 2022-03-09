import React from 'react';
import './index.css';
import { Portfolio, Nav, Header,Experience,Footer, Contact, About } from './components/exports'
import {  LangProvider } from './context/langContext';

export const App = () => {

    

    return (
        <LangProvider>            
                <Header/>
                <Nav/>
                <About/>
                <Experience/>
                <Portfolio/>
                <Contact/>
                <Footer/>
        </LangProvider>
    )
}
