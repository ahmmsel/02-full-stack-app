import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

export default function ChatBody({ username, messages }) {
  return (
    <ScrollToBottom>
      <main className="chat--body">
        {messages.map((message, index) => (
          <div className={`message ${username === message.username ? "author-message" : "other-message"}`} key={index}>
            <p className="message--content">{message.userMessage}</p>
            <small>{message.username}</small>
          </div>
        ))}
      </main>
    </ScrollToBottom>
  )
}
