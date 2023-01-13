import React from 'react';
import Board from './components/Board';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{marginTop: '2rem'}}>O famoso jogo da velha</h1>
        <p>(Vite.js, React.js, Styled-Components)</p>
      </div>
      <Board />
    </React.Fragment>
  );
};

export default App
