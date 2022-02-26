import React from 'react'

export default function ChatFooter({ value, submitHandler, inputChangeHandler }) {
  return (
    <footer className="chat--footer">
      <form onSubmit={submitHandler} className="chat--form">
        <label className="form--controller">
          <input 
            value={value}
            onChange={inputChangeHandler}
            name="currMessage"
            type="text" 
            className="input primary-input" 
            placeholder="send a message" 
            autoComplete="false"
          />
          <button type="submit" className="btn icon--primary-btn bi bi-send-fill"></button>
        </label>
      </form>
    </footer>
  )
}
