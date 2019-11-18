import React from 'react';
import "bulma/css/bulma.css";
import { Container, Card } from 'bloomer'

const Block = ({ critter }) => {
    return (
        <Card>
            <ul>
                <Card-Image>
                <img src={critter.img_small} alt="Tiny fella.." />
                </Card-Image>
                <Card-Content>
                <h2>
                    {critter.name}
                </h2>
                <h4>{critter.species}</h4>
                </Card-Content>
            </ul>
            </Card>
    );
};


export default Block;
