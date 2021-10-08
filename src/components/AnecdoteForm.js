import React from 'react'
import {useDispatch } from 'react-redux'
import { removeNotification, setNotification } from '../reducers/notificationReducer';
import { createAnec } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote= async (e)=>{
        e.preventDefault()
        const content = e.target.input.value
        dispatch(createAnec(content))
        dispatch(setNotification(`You created new anecdote ${content}`))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000)
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
