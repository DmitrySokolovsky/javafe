import React from 'react';
import './css/home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>This is HOME page</h1>
                <p className="home-description">This example shows Routing in react</p>
            </div>
        );
    }
}