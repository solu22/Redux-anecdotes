import React from 'react'
import {useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote= (e)=>{
        e.preventDefault()
        const content = e.target.input.value
        dispatch(createAnec(content))
        e.target.input.value =""
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
        <div><input name ="input" /></div>
        <button type= "submit">create</button>
      </form>
        </div>
    )
}

export default AnecdoteForm
