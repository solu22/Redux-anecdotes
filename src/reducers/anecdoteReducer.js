import anecService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
     case 'ADD_VOTE':
      
      return state.map((anec)=>anec.id!== action.payload ? anec: action.payload)
    

    case'CREATE ANECDOTE':
      return [...state, action.payload]
    
      case 'INIT':
        return action.payload

    default:
      return state;
 }

 
}


export const initialAnecdotes = ()=> async (dispatch) => {
    const dotes = await anecService.getAll()
    dispatch({
      type:'INIT',
      payload: dotes
    })
  }




export const addVote = (sanec)=> async(dispatch)=>{
  const anec = await anecService.updateVote({...sanec, votes:sanec.votes+1})
  dispatch({
    type: 'ADD_VOTE',
    payload: anec,
  })
}

export const createAnec = (content)=>async(dispatch)=>{

  const data = await anecService.create(content)
  dispatch({
    type: 'CREATE ANECDOTE',
    payload: data,
  })
}

export default anecdoteReducer