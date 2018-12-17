import React from 'react';
import { data } from './data';
import './css/list.css';
import { Link } from 'react-router-dom';
import { ListItem } from './list_item';
import axios from 'axios';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogsData: data
        };

        this.setState({
            data: responce
        });
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <ul>
                { 
                    this.props.data.map((item) => {
                        return (
                            <ListItem name={item}/>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default List;