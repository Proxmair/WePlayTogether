// src/store/socketSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

let socket: any = null;

const initialState = {
  onlineUsers: [],
  friendRequests: [],
  messages: [],
  socketConnected: false,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    // Socket connection state
    setSocketConnected: (state, action) => {
      state.socketConnected = action.payload;
    },
    clearSocket: (state) => {
      state.socketConnected = false;
    },
    // Manage online users
    setOnlineUsers: (state: any, action: any) => {
      state.onlineUsers = action.payload;
    },
    addUser: (state: any, action: any) => {
      const userExists = state.onlineUsers.some(
        (user: any) => user._id === action.payload._id
      );
      if (!userExists) {
        state.onlineUsers.push(action.payload);
      }
    },
    removeUser: (state: any, action: any) => {
      state.onlineUsers = state.onlineUsers.filter(
        (user: any) => user._id !== action.payload
      );
    },
    // Manage Friend Request
    setFriendRequests: (state, action) => {
      state.friendRequests = action.payload;
    },
    addFriendRequest: (state: any, action: any) => {
      state.friendRequests.push(action.payload);
    },
    modifyFriendRequest: (state: any, action) => {
      console.log(action.payload, "action.payload");

      state.friendRequests = state.friendRequests.map((friendRequest: any) => {
        if (friendRequest._id === action.payload._id) {
          return { ...friendRequest, status: action.payload.status };
        }
        return friendRequest;
      });
    },
    friendRequestSent: (state, action) => {
      const recipient = action.payload;
      if (socket) {
        socket.emit("send-friend-request", { recipientId: recipient._id });
      }
    },
    friendRequestAccept: (state, action) => {
      const recipient = action.payload;
      if (socket) {
        socket.emit("accept-friend-request", { recipientId: recipient._id });
      }
    },
    friendRequestCancel: (state, action) => {
      const recipient = action.payload;
      if (socket) {
        socket.emit("cancel-friend-request", { recipientId: recipient._id });
      }
    },
    // Manage Messeging
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    sentMessage: (state, action) => {
      const { message, recipientId } = action.payload;
      if (socket) {
        socket.emit("sent-message", { message, recipientId });
      }
    },
    addMessage: (state: any, action: any) => {
      state.messages.push(action.payload);
    },
  },
});

// Actions to connect and manage socket
export const connectSocket = (user: any) => (dispatch: any) => {
  if (!socket && user) {
    socket = io("http://localhost:5000", {
      auth: { user },
    });

    // Handle connection
    socket.on("connect", () => {
      dispatch(setSocketConnected(true));
    });

    // Online users
    socket.on("online-users", (users: any) => {
      dispatch(setOnlineUsers(users));
    });
    socket.on("user-connected", ({ user }: any) => {
      dispatch(addUser(user));
    });
    socket.on("user-disconnected", ({ user }: any) => {
      dispatch(removeUser(user._id));
    });

    // Handle friend requests
    socket.on("friend-request-received", ({ friendRequest }: any) => {
      dispatch(addFriendRequest(friendRequest));
    });
    socket.on("accept-friend-request-notify", ({ friendRequest }: any) => {
      dispatch(modifyFriendRequest(friendRequest));
    });
    socket.on("cancel-friend-request-notify", ({ friendRequest }: any) => {
      dispatch(modifyFriendRequest(friendRequest));
    });

    //Handle Messages
    socket.on("sent-message-notify", ({ message }: any) => {
      dispatch(addMessage(message));
    });
  }
};

// Action to disconnect the socket
export const disconnectSocket = () => (dispatch: any) => {
  if (socket) {
    socket.disconnect();
    socket = null;
    dispatch(clearSocket());
  }
};

export const {
  setOnlineUsers,
  addUser,
  removeUser,
  addFriendRequest,
  modifyFriendRequest,
  friendRequestSent,
  friendRequestAccept,
  friendRequestCancel,
  setSocketConnected,
  clearSocket,
  setFriendRequests,
  setMessages,
  sentMessage,
  addMessage,
} = socketSlice.actions;

export default socketSlice.reducer;
