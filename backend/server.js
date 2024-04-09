const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { addUser, getUser, removeUser } = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the MERN Realtime Board Sharing App official server by Fullyworld Web Tutorials");
});

// Socket.io event handling
io.on("connection", (socket) => {
  let roomIdGlobal;
  let imgURLGlobal;

  socket.on("userJoined", (data) => {
    const { name, userId, roomId, host, presenter } = data;
    roomIdGlobal = roomId;
    socket.join(roomId);
    const users = addUser({ name, userId, roomId, host, presenter, socketId: socket.id });
    socket.emit("userIsJoined", { success: true, users });
    console.log({ name, userId });
    socket.broadcast.to(roomId).emit("whiteBoardDataResponse", { imgURL: imgURLGlobal });
    socket.broadcast.to(roomId).emit("allUsers", users);
  });

  socket.on("whiteboardData", (data) => {
    imgURLGlobal = data;
    socket.broadcast.to(roomIdGlobal).emit("whiteBoardDataResponse", { imgURL: data });
    console.log(`Broadcasted whiteboard data to room ${roomIdGlobal}`);
  });

  socket.on("message", (data) => {
    const { message } = data;
    const user = getUser(socket.id);
    if (user) {
      socket.broadcast.to(roomIdGlobal).emit("messageResponse", { message, name: user.name });
    }
  });

  socket.on("disconnect", () => {
    const user = getUser(socket.id);
    if (user) {
      removeUser(socket.id);
      socket.broadcast.to(roomIdGlobal).emit("userLeftMessageBroadcasted", { name: user.name, userId: user.userId });
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
