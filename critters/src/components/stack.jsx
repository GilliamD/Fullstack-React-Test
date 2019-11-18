import React, {Component} from 'react';
import "bulma/css/bulma.css";
import { loadData } from '../utilities/loadData';
import Block from './block';

class Stack extends Component {
    state = {
        critters : []
    }

    async componentDidMount() {
        const critters = await loadData(`http://localhost:5000`);
        
        console.log(critters)
        this.setState({
            critters
        });
    }

    render() {
        const { critters } = this.state;
        return (
            <>
                {critters.map((critter, id) => (
                    <li key={`critter-${id}`}>
                        <Block critter = {critter} />
                    </li>
                ))}
            </>
        );
    }
}

export default Stack