import React, { Component } from 'react'
import Navbar from './Navbar/Navbar';
import TourList from './TourList/index';

export class ProjectTwoMain extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <TourList/>
            </React.Fragment>
        )
    }
}

export default ProjectTwoMain;
