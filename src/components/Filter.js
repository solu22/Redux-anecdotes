import React from 'react'
import { search } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = (props) => {
 
  const handleChange = (event) => {
    props.search(event.target.value)

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect(null, {search})(Filter)