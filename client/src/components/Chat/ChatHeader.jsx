import React from 'react'

export default function ChatHeader({ room }) {
  return (
    <header className="chat--header">
      <h1>{room}</h1>
    </header>
  )
}
