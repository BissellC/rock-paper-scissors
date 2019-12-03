import React, { useState, useEffect } from 'react'

const App = () => {
  const [playerValue, setPlayerValue] = useState()
  const [computerValue, setComputerValue] = useState('???')
  const [result, setResult] = useState('Who will Win?')
  const [playerWins, setPlayerWins] = useState(0)
  const [computerWins, setComputerWins] = useState(0)
  const [reaction, setReaction] = useState('🤔')

  const playerMove = move => {
    if (move === 'rock') {
      setPlayerValue('🗿')
    } else if (move === 'paper') {
      setPlayerValue('🧻')
    } else if (move === 'scissors') {
      setPlayerValue('✂️')
    }
    computerMove()
  }

  const computerMove = () => {
    let move = Math.floor(Math.random() * 3)
    if (move === 0) {
      setComputerValue('🗿')
    } else if (move === 1) {
      setComputerValue('🧻')
    } else if (move === 2) {
      setComputerValue('✂️')
    }
    console.log(move)
  }

  const findWinner = () => {
    if (playerValue === '🗿' && computerValue === '🗿') {
      setResult('Tie')
      setReaction('😐')
    } else if (playerValue === '🧻' && computerValue === '🧻') {
      setResult('Tie')
      setReaction('😐')
    } else if (playerValue === '✂️' && computerValue === '✂️') {
      setResult('Tie')
      setReaction('😐')
    } else if (playerValue === '🗿' && computerValue === '🧻') {
      setResult('Computer Wins')
      setReaction('🤠')
    } else if (playerValue === '🗿' && computerValue === '✂️') {
      setResult('Player Wins')
      setReaction('😯')
    } else if (playerValue === '🧻' && computerValue === '🗿') {
      setResult('Player Wins')
      setReaction('😯')
    } else if (playerValue === '🧻' && computerValue === '✂️') {
      setResult('Computer Wins')
      setReaction('🤠')
    } else if (playerValue === '✂️' && computerValue === '🗿') {
      setResult('Computer Wins')
      setReaction('🤠')
    } else if (playerValue === '✂️' && computerValue === '🧻') {
      setResult('Player Wins')
      setReaction('😯')
    }
    matchWinCheck()
  }

  const winCounter = () => {
    switch (result) {
      case 'Player Wins':
        setPlayerWins(playerWins + 1)
        break
      case 'Computer Wins':
        setComputerWins(computerWins + 1)
        break
    }
  }

  const matchWinCheck = () => {
    if (playerWins === 5) {
      setResult('Congratulations, you win!')
      setReaction('😡')
    } else if (computerWins === 5) {
      setResult('You are a loser...')
      setReaction('🥳')
    }
  }

  useEffect(() => {
    findWinner()
  }, [computerMove])

  useEffect(() => {
    winCounter()
  }, [result])

  return (
    <>
      <header>
        <p className="title">Rock, paper, scissors.</p>
        <p className="description">First to 5 wins!</p>
        <div className="result-display">{result}</div>
      </header>

      <main>
        <section className="player-side">
          <section className="player-display">{playerValue}</section>
          <section className="player-choose">
            <button className="rock" onClick={() => playerMove('rock')}>
              rock
            </button>
            <button className="paper" onClick={() => playerMove('paper')}>
              paper
            </button>
            <button className="scissors" onClick={() => playerMove('scissors')}>
              scissors
            </button>
          </section>
        </section>
        <section className="computer-side">
          <section className="computer-display">{computerValue}</section>
          <div className="computer-reaction">{reaction}</div>
        </section>
      </main>

      <section className="wins">
        <div className="player-wins">{playerWins}</div>
        <div className="computer-wins">{computerWins}</div>
      </section>
    </>
  )
}

export default App
