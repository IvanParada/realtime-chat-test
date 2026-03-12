import { defineStore } from "pinia";
import socket from "../services/socket";

export const useChatStore = defineStore("chat", {
  state: () => ({
    messages: [],
    username: `User_${Math.floor(Math.random() * 1000)}`,
    connected: false,
    initialized: false,
  }),

  actions: {
    initSocket() {
      if (this.initialized) return;

      if (!socket.connected) socket.connect();

      socket.on("connect", () => {
        this.connected = true;
      });

      socket.on("disconnect", () => {
        this.connected = false;
      });

      socket.on("message", (data) => {
        this.messages.push(data);
      });

      this.initialized = true;
    },

    setUsername(name) {
      this.username = name;
    },

    sendMessage(msg) {
      if (!msg.trim()) return;
      socket.emit("message", {
        user: this.username,
        msg,
      });
    },

    cleanupSocket() {
      if (!socket) return;
      socket.removeAllListeners();
      socket.disconnect();
      this.initialized = false;
      this.connected = false;
    },
  },

  persist: {
    key: "chat-storage-vue",
    storage: localStorage,
    pick: ["messages", "username"],
  },
});
