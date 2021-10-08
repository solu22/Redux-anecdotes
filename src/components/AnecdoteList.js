import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filterReducer) {
      return state.anecdoteReducer.filter((a) =>
        a.content.includes(state.filterReducer)
      );
    }
    return (state.anecdoteReducer)
  });
  const dispatch = useDispatch();
  anecdotes.sort((a,b)=>b.votes-a.votes)

  const vote = (anectode) => {
    dispatch(addVote(anectode));
    dispatch(setNotification(`you voted ${anectode.content}`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.length>0 && anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote?.content}</div>
          <div>has {anecdote?.votes}</div>
          <div>
            <button onClick={() => vote(anecdote)}>Vote this one</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
