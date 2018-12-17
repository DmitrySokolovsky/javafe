import React from 'react';
import { Link } from 'react-router-dom';
import './css/navigation.css';

export class Navigation extends React.Component {

    render () {
        return (
            <div className="navigation-container">
                <ul className="navigation">
                    <li className="navigation-item"><Link to="/">HOME</Link></li>
                    <li className="navigation-item"><Link to="/list">LIST</Link></li>
                    <li className="navigation-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}