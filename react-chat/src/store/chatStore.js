import { create } from "zustand";
import { persist } from "zustand/middleware";
import socket from "../services/socket";

export const useChatStore = create(
  persist(
    (set, get) => ({
      messages: [],
      username: `User_${Math.floor(Math.random() * 1000)}`,
      connected: false,
      initialized: false,

      initSocket: () => {
        if (get().initialized) return;

        if (!socket.connected) socket.connect();

        socket.on("connect", () => {
          set({ connected: true });
        });

        socket.on("disconnect", () => {
          set({ connected: false });
        });

        socket.on("message", (data) => {
          set((state) => ({
            messages: [...state.messages, data],
          }));
        });

        set({ initialized: true });
      },

      setUsername: (name) => set({ username: name }),

      sendMessage: (msg) => {
        if (!msg.trim()) return;
        const user = get().username;
        socket.emit("message", { user, msg });
      },

      cleanupSocket: () => {
        if (!socket) return;
        socket.removeAllListeners();
        socket.disconnect();
        set({ initialized: false });
        set({ connected: false });
      },
    }),
    {
      name: "chat-storage",
      partialize: (state) => ({
        messages: state.messages,
        username: state.username,
      }),
    },
  ),
);
