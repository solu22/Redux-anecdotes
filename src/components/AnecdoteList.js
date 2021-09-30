import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification,removeNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector((state) => state.anecdoteReducer)
    const dispatch = useDispatch()

  const add = (id) => {
    dispatch(addVote(id))
    const findAnec = anecdotes.find(anec=>anec.id===id)
    const content = findAnec? findAnec.content:null
    dispatch(setNotification(`you voted ${content}`))
    setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
  }
    return (
        <div>
            <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={()=> add(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
            
        </div>
    )
}

export default AnecdoteList
