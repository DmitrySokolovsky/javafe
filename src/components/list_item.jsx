import React from 'react';
import { data } from './data';
import './css/list.css';
import { Link } from 'react-router-dom';

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <li className="list-item" key={this.props.name.name}>
                    <p className="list-item-name label">Name: {this.props.name.weight}</p>
                    <p className="list-item-name value">{this.props.name.name}</p>
                    <p className="link"><Link to={`/details/${this.props.name.name}`}>Show more...</Link></p>
                </li>                
        );
    }
}