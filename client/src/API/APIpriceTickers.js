import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:4000';

const socket = io.connect(SERVER_URL);
socket.emit('start');

export { socket };
