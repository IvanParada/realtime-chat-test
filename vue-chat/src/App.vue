<script setup>
import { onMounted, onUnmounted } from "vue";
import { useChatStore } from "./stores/chatStore";
import ChatWindow from "./components/ChatWindow.vue";

const chat = useChatStore();

onMounted(() => {
  chat.initSocket();
});

onUnmounted(() => {
  chat.cleanupSocket();
});
</script>

<template>
  <div class="max-w-xl mx-auto p-6">
    <ChatWindow />
  </div>
</template>
