<script setup>
import { useChatStore } from "../stores/chatStore.js";
const chat = useChatStore();
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="badge badge-sm"
      :class="chat.connected ? 'badge-success' : 'badge-error'"
    ></span>

    <span class="text-xs font-medium uppercase tracking-wider opacity-70">
      {{ chat.connected ? "En línea" : "Desconectado" }}
    </span>
  </div>
</template>
