import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {getGame} from '../services/gameApi';
import './GameBoard.css'

function GameBoard(props) {
  const [grid, setGrid] = useState([[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]]);
  const { gameId } = useParams();
  useEffect(function () {
    async function getGameUpdates() {
      let {game} = await getGame(gameId);
      setGrid(game.board);
      props.setPlayer1(game.player1);
      props.setPlayer2(game.player2);
    }
    const intervalHandler = setInterval(() => getGameUpdates(), 5000);
    return () => clearInterval(intervalHandler);
  }, [props.currentGame]);


  return (<>
    <h3>Play The Game {gameId}</h3>
    <b>You: {props.player1}</b> | 
    <b>{props.player2 ? props.player2 : "Awaiting Oponent"}</b>
    <div class="game-board">
      {grid.map(column => column.map(cell => <div>{cell}</div>))}
    </div>
  </>);
}

export default GameBoard;
