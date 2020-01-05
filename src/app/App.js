import React from 'react';
import styled from "styled-components";

import BearsScreen from "./../beer/screens/Beers";

import "./index.css";

const Container = styled.div`
    padding: 24px;
`;

function App() {
  return (
    <Container>
      <BearsScreen />
    </Container>
  );
}

export default App;
