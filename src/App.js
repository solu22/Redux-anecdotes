import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asObject } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
      type: 'ADD VOTE',
      payload: id
    })
  }

  const addAnecdote= (e)=>{
    e.preventDefault()
    const content = e.target.input.value
    dispatch({
      type: 'CREATE ANECDOTE',
      payload: asObject(content)
    })
    e.target.input.value =""
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name ="input" /></div>
        <button type= "submit">create</button>
      </form>
    </div>
  )
}

export default App