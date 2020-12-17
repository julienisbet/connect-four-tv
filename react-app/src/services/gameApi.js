const createGame = async (player1) => {
	const res = await fetch('/api/games', {
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(player1),
	})
	if (res.ok) {
		//res coming in as {'game': game.id}
		return await res.json()
	} else {
		console.log(res.error)
	}
}

const addPlayer = async (gameId, player2) => {
	const res = await fetch(`/api/games/${gameId}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(player2),
	})
	if (res.ok) {
		//res coming in as {'game': game.id}
		return await res.json()
	} else {
		console.log(res.error)
	}
}

const getGame = async (gameId) => {
	const res = await fetch(`/api/games/${gameId}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})

	// res coming in as {'game': game object}
	res.ok ? await res.json() : console.log(res.error)
}

const makeMove = async (gameId, playerId) => {
	const res = await fetch(`/api/games/${gameId}/player/${playerId}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(player2),
	})

	// json is either { success: true} or { error: reason}
	return await res.json()
}
