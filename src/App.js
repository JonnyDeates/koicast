import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import {Route, Switch} from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Home from  "./Home/Home"
import About from  "./About/About"
import Footer from "./Footer/Footer";
import STORE from './STORE';
import Page from "./Page/Page";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header header={['K', 'i Cast']}/>
                <Route render={(routeProps) => <NavBar currentActive={routeProps.location} links={STORE.links}/>}/>
                <Switch>
                    <Route exact path='/'><Home page={STORE.home} /></Route>
                    <Route exact path='/about'><About page={STORE.about} /></Route>
                    {[STORE.future, STORE.tech, STORE.books].map((page, i) => <Route exact key={i} path={'/'+page.link}><Page page={page} /></Route>)}
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
