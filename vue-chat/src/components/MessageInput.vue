<script setup>
import { ref } from "vue";
import { useChatStore } from "../stores/chatStore.js";

const chat = useChatStore();
const message = ref("");

const handleSubmit = () => {
  if (!message.value.trim()) return;
  chat.sendMessage(message.value);
  message.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2">
    <input
      v-model="message"
      type="text"
      placeholder="Mensaje"
      class="input w-full"
    />
    <button type="submit" class="btn btn-primary" :disabled="!message.trim()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            fill="#fffdfd"
            d="m7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028l.58-5.216a2 2 0 0 0 0-.442l-.58-5.216c-.173-1.557 1.429-2.7 2.844-2.029"
            opacity="0.16"
          />
          <path
            stroke="#fffdfd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028zm0 0h7"
          />
        </g>
      </svg>
    </button>
  </form>
</template>
