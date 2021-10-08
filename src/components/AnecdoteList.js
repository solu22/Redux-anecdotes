import React from "react";

import { addVote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import { notify } from "../reducers/notificationReducer";

const Anecdote = ({ anec, handleClick }) => (
  <div>
    <div>{anec && anec.content}</div>
    <div>
      has {anec && anec.content}
      <button onClick={handleClick}>Vote this one</button>
    </div>
  </div>
);

const AnecdoteList = (props) => {
  const handleVote = (anectode) => {
    props.addVote(anectode);
    props.notify(`You voted ${anectode.content}`);
  };

  return (
    <>
      <h2>Anecdotes</h2>

      {props.anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anec={anecdote}
          handleClick={() => handleVote(anecdote)}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  let anec = state.anecdoteReducer;

  if (state.filterReducer) {
    anec = state.anecdoteReducer.filter((an) =>
      an.content.includes(state.filterReducer)
    );
  }

  return { anecdotes: anec };
};

export default connect(mapStateToProps, { addVote, notify })(AnecdoteList);
