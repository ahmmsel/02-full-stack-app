import React from 'react'

import "./join.scss"

export default function Join({ socket, submitHandler, inputChangeHandler, error }) {
  return (
    <section className="section join--section">
      <form onSubmit={submitHandler} className="join--form box">
        <label className="form--controller">
          <p>username</p>
          <input 
            onChange={inputChangeHandler}
            name="username" 
            className="input secondary-input" 
            placeholder="e.g: username" 
          />
        </label>
        <label className="form--controller">
          <p>room</p>
          <input 
            onChange={inputChangeHandler}
            name="room" 
            className="input secondary-input" 
            placeholder="e.g: our room"
            />
        </label>
        {error && <small className="error">all failed must not empty</small>}
        <button type="submit" className="btn primary-btn">join now</button>
      </form>
    </section>
  )
}
