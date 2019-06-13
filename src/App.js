import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import './assets/css/Projectone.css'

import ProjectOneMain from './Components/ProjectOne/ProjectOneMain';
import ProjectTwoMain from './Components/ProjectTwo/ProjectTwoMain';
import ProjectThreeMain from './Components/ProjectThree/ProjectThreeMain';
import ProjectFourMain from './Components/ProjectFour/ProjectFourMain';
import Header from './Components/Header';

export class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Router>
                    <Route exact path="/projectone" component={ProjectOneMain}/>
                    <Route exact path="/projectTwo" component={ProjectTwoMain}/>
                    <Route exact path="/projectThree" component={ProjectThreeMain}/>
                    <Route exact path="/projectFour" component={ProjectFourMain}/>
                </Router>
            </React.Fragment>
        )
    }
}
export default App;
