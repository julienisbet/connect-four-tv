import React, { useState } from 'react'
import { createGame } from '../services/gameApi'

function NewGameForm(props) {
	const [player1, setPlayer1] = useState('')
	const [player2, setPlayer2] = useState('')
	const [gameId, setGameId] = useState(0)

	function handleSubmit(e) {
		e.preventDefault()
		async function submitForm() {
			let { game } = await createGame(player1)
			props.setCurrentGame(game)
			props.setPlayer1(player1)
			props.setPlayer2(player2)
			props.setGameId(gameId)
		}
		submitForm()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='player1'>Player 1 Username</label>
			<input
				type='text'
				name='player1'
				value={player1}
				onChange={(e) => setPlayer1(e.target.value)}
			/>
			<br />
			<label htmlFor='player2'>Player 2 Username</label>
			<input
				type='text'
				name='player2'
				value={player2}
				onChange={(e) => setPlayer2(e.target.value)}
			/>
			<br />
			<label htmlFor='gameId'>Game ID</label>
			<input
				type='number'
				name='gameId'
				value={gameId === 0 ? '' : gameId}
				onChange={(e) => setGameId(e.target.value)}
			></input>
			<br />
			<input type='submit' name='Begin Game' />
		</form>
	)
}

export default NewGameForm
