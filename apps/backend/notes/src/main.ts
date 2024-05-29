import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import http from 'http';
import jsonwebtoken from 'jsonwebtoken'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/notes')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.get('/', (req, res) => {
  res.send('Notes Service is running');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
