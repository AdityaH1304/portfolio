import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
