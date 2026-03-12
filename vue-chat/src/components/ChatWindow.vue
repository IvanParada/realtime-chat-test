<script setup>
import { useChatStore } from "../stores/chatStore";
import MessageList from "./MessageList.vue";
import MessageInput from "./MessageInput.vue";
import StatusIndicator from "./StatusIndicator.vue";

const chat = useChatStore();
</script>

<template>
  <div class="space-y-4">
    <div
      class="flex justify-between items-center bg-gray-800 p-3 rounded-lg text-white"
    >
      <div class="flex items-center gap-3">
        <div class="flex flex-col">
          <h1 class="text-xl font-bold">Vue Chat</h1>
          <div class="flex items-center gap-1">
            <input
              type="text"
              v-model="chat.username"
              class="text-xs border-none bg-transparent focus:ring-0 p-0 text-indigo-400 font-bold w-20"
              placeholder="Tu nombre..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fffdfd"
                d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
              />
            </svg>
          </div>
        </div>
      </div>
      <StatusIndicator />
    </div>
    <MessageList />
    <MessageInput />
  </div>
</template>
