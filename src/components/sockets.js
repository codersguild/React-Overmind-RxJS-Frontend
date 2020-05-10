import socketIOClient from "socket.io-client";

export const socket_live = socketIOClient(process.env.REACT_SERVER_END_POINT);

export  const events = {
	online : "online",
	offline : "offlline"
}
