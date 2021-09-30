const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      const toBeVoted = state.find((anec)=> anec.id === action.payload)
      const voteIt = {...toBeVoted, votes:toBeVoted.votes+1}
      const afterVote= state.map((anec)=>anec.id!== voteIt.id ? anec: voteIt)
      return afterVote.sort((a,b)=>b.votes-a.votes)

    case'CREATE ANECDOTE':
      return [...state, action.payload]
    default:
      return state;
  }

 
}

//action creator

export const addVote = (id)=>{
  return {
    type: 'ADD_VOTE',
    payload: id
  }
}

export const createAnec = (content)=>{
  return {
    type: 'CREATE ANECDOTE',
    payload: asObject(content)
  }
}

export default anecdoteReducer