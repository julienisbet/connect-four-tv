import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import GameBoard from './components/GameBoard'
import NewGameForm from './components/NewGameForm'

function App() {
  const [currentGame, setCurrentGame] = useState('');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');


	return (
		<BrowserRouter>
			<NavBar  />
			<Route path='/' exact={true}>
        <h3>Welcome to Connect-4 TV</h3>
        {currentGame ? <Redirect to={`/game/${currentGame}`} /> : <NewGameForm setCurrentGame={setCurrentGame} setPlayer1={setPlayer1} />}
			</Route>
      <Route path='/game/:gameId' exact={true}>
        <GameBoard player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
      </Route>
		</BrowserRouter>
	)
}

export default App
