import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    position: absolute;
`;

export default function Loading({ login, status }) {
    return (
        <Container>
            <span>Cargando cervezas...</span>
        </Container>
    )
}
