import React from 'react';
import { data } from './data';
import './css/list.css';
import { Link } from 'react-router-dom';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogsData: data
        };
    }

    render() {
        return (
            <div>
                <ul>
                { 
                    this.props.data.map((item, index) => {
                        return (
                            <li className="list-item" key={index}>
                                <p className="list-item-name label">Name: </p>
                                <p className="list-item-name value">{item.name}</p>
                                <p className="link"><Link to={`/details/${item.name}`}>Show more...</Link></p>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}