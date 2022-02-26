import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import useFormHandler from './hooks/useFormHandler';

const socket = io("http://localhost:5000");

function App() {
  const [isJoined, setIsJoined] = useState(false)
  const [error, setError] = useState(false)
  const { values: { username, room }, inputChangeHandler, submitHandler } = useFormHandler({ username: "", room: "" }, joinRoomHandler)

  function joinRoomHandler() {
    if (username.trim() && room.trim()) {
      socket.emit("join_room", { username, room })
      setIsJoined(true)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    (username.trim() || room.trim()) && setError(false)
  }, [username, room])

  return (
    <div className="chat--app container">
      {!isJoined ? 
      <Join 
        socket={socket} 
        submitHandler={submitHandler} 
        inputChangeHandler={inputChangeHandler} 
        error={error} 
      />
      :
      <Chat socket={socket} username={username} room={room} />
      }
    </div>
  )
}

export default App
