import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProjectOneMain from './ProjectOne/ProjectOneMain';
import ProjectTwoMain from './ProjectTwo/ProjectTwoMain';
import ProjectThreeMain from './ProjectThree/ProjectThreeMain';
import ProjectFourMain from './ProjectFour/ProjectFourMain';
import Header from './Header';

export class Main extends Component {
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

export default Main
