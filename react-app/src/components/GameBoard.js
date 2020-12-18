import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../services/gameApi'
import './GameBoard.css'

function GameBoard(props) {
	const [grid, setGrid] = useState([
		[null, null, null, null, null],
		[null, null, null, null, null],
		[null, null, null, null, null],
		[null, null, null, null, null],
	])

	const [squareId, setSquareId] = useState(1)

	const { gameId } = useParams()

	useEffect(
		function () {
			async function getGameUpdates() {
				let { game } = await getGame(gameId)
				setGrid(game.board)
				props.setPlayer1(game.player1)
				props.setPlayer2(game.player2)
			}
			const intervalHandler = setInterval(() => getGameUpdates(), 1000)
			return () => clearInterval(intervalHandler)
		},
		[props, gameId]
	)

	const handleSquareId = (e) => {
		if (!e.target.id) {
			e.target.id = squareId
			setSquareId(squareId + 1)
		}
		console.log(e.target.id)
	}

	function buildRow(row_id) {
		return grid.map((col, col_id) => (
			<div onClick={handleSquareId} key={`${row_id}${col_id}`}>
				{col[row_id]}
			</div>
		))
	}

	return (
		<>
			<h3>Play The Game {gameId}</h3>
			<b>You: {props.player1}</b> |
			<b>Opponent: {props.player2 ? props.player2 : 'Awaiting Oponent'}</b>
			<div className='game-board'>
				{[0, 1, 2, 3].map((i) => buildRow(i)).reverse()}
			</div>
		</>
	)
}

export default GameBoard
