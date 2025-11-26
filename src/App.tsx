import { useEffect, useState } from 'react'
import useFetchData from './hooks/useFetchData'
import checkIfMatch from './utils/check-match'
import restartGame from './utils/restart-game'

function App() {
  const [clickedCards, setClickedCards] = useState<number[]>([])
  const [canClick, setCanClick] = useState(true)

  const { data, loading, error, refetch } = useFetchData("http://localhost:8080/memory/game-state")
  const cards = data?.cards
  const totalPoints = data?.totalPoints
  const matchesLeft = data?.matchesLeft

  useEffect(() => {
    if (clickedCards.length === 2) {
      setCanClick(false)

      checkIfMatch(clickedCards[0], clickedCards[1], refetch)

      setTimeout(() => {
        setCanClick(true)
        setClickedCards([])
      }, 2000)
    }
  }, [clickedCards])

  const handleClick = (cardId: any) => {
    if (canClick) {
      setClickedCards([...clickedCards, cardId])
    }
  }


  if (loading || error) {
  return (
      <div>
        <div className="memory-container">
         <h1>Color Memory</h1>
         <p>{error ? `There was an error :( { error }` : "...loading"}</p>
        </div>
      </div>
         )
    
  } else {
    return (
      <div>
        <div className="memory-container">
          <h1>Color Memory</h1>
          <h3>Total points: {totalPoints}</h3>
          <h3>Matches left: {matchesLeft}</h3>

          <div className="card-container">
            {cards && cards.map(card => {
              const showFlippedSide = card.hasBeenMatched || (clickedCards.includes(card.id));

              return(
              <div 
                key={card.id} 
                onClick={() => !(matchesLeft === 0) && handleClick(card.id)} 
                className={`card ${!canClick ? "card--disabled" : ""} ${showFlippedSide ? "card--flipped" : ""}`}
              >
                <div 
                  className={showFlippedSide ? "card__content--flipped" : "card__content"}>
                    {card.emoji}
                  </div>
              </div>
            )})}
          </div>
          {
            !matchesLeft && (
              <>
                <h3>Congratulations! You've found all matches 🎉</h3>
                <button className="restart-button" onClick={() => restartGame(refetch)}>Restart</button>
              </>
            )
          }
        </div>
      </div>
    )
  }
}

export default App