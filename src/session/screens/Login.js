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

export default function Login({login, status}) {
    return (
        <Container>
            {status === "init" && <span>Trantando de restaurar sesión...</span>}
            {status === "restored" && <button onClick={login}>Iniciar sesión</button>}
        </Container>
    )
}
