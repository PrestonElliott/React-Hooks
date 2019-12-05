import React, { useState, useEffect, useRef } from 'react'

export default function Search() {

    // SET INITIAL STATE FOR query AND jokes
    // CREATE REF FOR SEARCH INPUT
    // THIS ORDER MATTERS
    const [query, setQuery] = useState('')
    const [jokes, setJokes] = useState([])
    const focusSearch = useRef(null)

    // FETCH API DATA
    const getJokes = async (query) => {
        const results = await fetch(`https://icanhazdadjoke.com/search?term=${query}`, {
            headers: {'accept': 'application/json'}
        })
        const jokesData = await results.json()
        return jokesData.results
    }

    // PREVENTS RERENDER FLICKERING AS USER TYPES IN SEARCH
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // useEffect - FOCUS SEARCH INPUT
    useEffect(() => {focusSearch.current.focus()}, [])

    // useEffect - ONLY RERENDERS WHEN query IS CHANGED
    useEffect(() => {
        let isCurrentQuery = true
        const controller = new AbortController()

        const loadJokes = async () => {
            if (!query) return setJokes([])

            await sleep(350) 
            if (isCurrentQuery) {
                const jokes = await getJokes(query, controller)
                setJokes(jokes)
            }
        }
        loadJokes()

        return () => {
            isCurrentQuery = false
            controller.abort()
        }
    }, [query])


    // RENDER JOKES 
    let jokeComponents = jokes.map((joke) => {
        return <li key={joke.id}>{joke.joke}</li> 
    })

    // RENDER COMPONENT
    return (
        <>
        <div>
            <input
                placeholder="Search for a Joke"
                ref={focusSearch}
                onChange={(e) => setQuery(e.target.value)}
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