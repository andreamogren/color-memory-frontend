  const restartGame = async (refetch: Function) => {
    const response = await fetch("http://localhost:8080/memory/restart", { method: 'POST' });

    try {
      if (!response.ok) {
        throw new Error('Failed to restart game')
      }
      refetch()

    } catch (error) {
      console.error('Error restarting game:', error)
    }
  }

  export default restartGame