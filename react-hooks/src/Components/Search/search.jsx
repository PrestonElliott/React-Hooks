import React, { useState, useEffect, useRef } from 'react'

export default function Search() {

    const [query, updateQuery] = useState("")
    const [jokes, fetchJokes] = useState([])
    const focusSearch = useRef(null)

    const getJokess = async(query) => {
        const results = await fetch(`https://icanhazdadjoke.com/search`)
        const jokesData = await results.json()
        return jokesData
    }

    useEffect(() => {
        focusSearch.current.focus()
    }, [])

    useEffect(() => {
        let isCurrentQuery = true
        const controller = new AbortController()

        const loadJokes = async () => {
            if (!query) return fetchJokes([])

            if (isCurrentQuery) {
                const jokes = await getJokes(query, controller)
                fetchJokes(jokes)
            }
        }
        loadJokes()

        return () => {
            isCurrentQuery = false
            controller.abort()
        }
    }, [query])

    let jokeComponents = jokes.map((joke, index) => {
        return <li key={index}>joke={joke}</li> 
    })

    return (
        <>
        <div>
            <input
                placeholder="Search for a Joke"
                ref={focusSearch}
                onChange={(e) => updateQuery(e.target.value)}
                value={query} 
                type="text"
            />
        </div>
        <div>
            <ul>
                {jokeComponents}
            </ul>
        </div>
        </>
    )
}