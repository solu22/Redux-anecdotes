import React from "react";
import { createAnec } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const AnecdoteForm = (props) => {
  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.input.value;
    e.target.input.value = "";
    props.createAnec(content);
    props.notify(`You created new anecdote ${content}`);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="input" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default connect(null, { createAnec, notify })(AnecdoteForm);
