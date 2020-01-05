import React from 'react'
import styled from "styled-components";


//import BeerCard from 
import { useBeers } from "./../hooks";

const Beers = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 24px;
`;

const Beer = styled.div`
    height: 300px;
    width: 100%;
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function BearsScreen() {
    const beers = useBeers();
    return (
        <Beers>
            {beers.map(({ id, name, price }) => (
                //<BeerCard key={id} id={id} />
                <Beer key={id}>
                    {name}: {price}
                </Beer>
            ))}
        </Beers>
    )
}
