import { useState, useEffect } from "react"

type MemoryState = {
  cards: Card[],
  matchesLeft: number,
  totalPoints: number
}

type Card = {
  id: number,
  emoji: string,
  hasBeenMatched: boolean
}

const useFetchData = (url: string) => {
  const [data, setData] = useState<MemoryState>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refetchTrigger, setRefetchTrigger] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error: any) {
        console.error(error)
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url, refetchTrigger])

    const refetch = () => setRefetchTrigger(prev => prev + 1)

  return { data, loading, error, refetch };
}

export default useFetchData