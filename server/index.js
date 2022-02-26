import express from "express"
import { createServer } from "http"
import cors from "cors"
import { Server } from "socket.io"

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {
  socket.on("join_room", ({ username, room }) => {
    socket.join(room)
  })

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data)
  })
})

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})