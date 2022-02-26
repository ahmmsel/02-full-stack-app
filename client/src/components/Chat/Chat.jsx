import React, { useState, useEffect } from 'react'

import "./chat.scss"
import useFormHandler from '../../hooks/useFormHandler'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

export default function Chat({ room, username, socket }) {
  const { values: { currMessage }, setValues, inputChangeHandler, submitHandler } = useFormHandler({ currMessage: "" }, sendMessageHandler)
  const [messages, setMessages] = useState([])

  async function sendMessageHandler() {
    if (currMessage.trim()) {
      const messageProp = {
        room,
        username,
        userMessage: currMessage
      }
      await socket.emit("send_message", messageProp)
      setMessages(prevMessage => ([...prevMessage, messageProp]))
      setValues(prevValues => ({
        ...prevValues,
        currMessage: ""
      }))
    }
  }

  useEffect(() => {
    socket.on("receive_message", receive => {
      setMessages(prevMessage => ([...prevMessage, receive]))
    })
  }, [socket])

  return (
    <section className="section chat--section">
      <div className="chat--layout">
        <ChatHeader room={room} />
        <ChatBody username={username} messages={messages} />
        <ChatFooter value={currMessage} inputChangeHandler={inputChangeHandler} submitHandler={submitHandler} />
      </div>
    </section>
  )
}
