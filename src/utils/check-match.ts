  const checkIfMatch = async (cardId1: number, cardId2: number, refetch: Function) => {
    try {
      const response = await fetch("http://localhost:8080/memory/check-match", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          card1: cardId1,
          card2: cardId2
        })
      })

      if (!response.ok) {
        throw new Error('Failed to check match')
      }

      refetch()
    } catch (error) {
      console.error('Error checking match:', error)
    }
  }

  export default checkIfMatch