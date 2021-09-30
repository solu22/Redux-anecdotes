import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, createAnec } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const add = (id) => {
    console.log('--', id)
    dispatch(addVote(id))
  }

  const addAnecdote= (e)=>{
    e.preventDefault()
    const content = e.target.input.value
    dispatch(createAnec(content))
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
            <button onClick={()=> add(anecdote.id)}>vote</button>
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