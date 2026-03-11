const { Server } = require("socket.io");

const io = new Server(3001, {
    cors: {
        origin: "*"
    }
});

console.log("Socket server running on port 3001");

io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    socket.on("message", (msg) => {
        console.log("Message received:", msg);
        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });

});