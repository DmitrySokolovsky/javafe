import React from 'react';
import './css/details.css';

export class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dogInfo: {}
        }
    }

    componentWillMount() {
        var dogInfo = this.findItem(this.props.data, this.props.match.params.name);

        this.setState({
            dogInfo: dogInfo
        });
    }

    render() {
        var dog = this.state.dogInfo;

        return(
            <div className="details">
                <div className="content-item">
                    <h1>{dog.name}</h1>
                    <img src={dog.pic} alt="Dog"/>
                </div>
                <div className="content-item">
                    <p className="dog-item"><span className="title-item">Cost: </span>{dog.cost}$</p>
                    <p className="dog-item"><span className="title-item">Weight: </span>{dog.weight}</p>
                    <p className="dog-item"><span className="title-item">Primary Skill: </span>{dog.primarySkill}</p>
                </div>

            </div>
        );
    }

    findItem(arr, name) {
        var item;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name === name) {
                item = arr[i];
            }
        }

        return item;
    }
}