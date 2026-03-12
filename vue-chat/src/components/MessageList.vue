<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import { useChatStore } from "../stores/chatStore.js";

const chat = useChatStore();
const bottomRef = ref(null);

const scrollToBottom = async (behavior = "smooth") => {
  await nextTick();
  if (bottomRef.value) {
    bottomRef.value.scrollIntoView({ behavior });
  }
};

onMounted(() => {
  scrollToBottom("smooth");
});

watch(
  () => chat.messages.length,
  () => scrollToBottom("smooth"),
);
</script>

<template>
  <div class="h-[70vh] rounded-lg p-4 overflow-y-auto bg-gray-200">
    <p
      v-if="chat.messages.length === 0"
      class="text-gray-400 text-center mt-10"
    >
      No hay mensajes
    </p>

    <div v-else class="space-y-2">
      <div
        v-for="(data, i) in chat.messages"
        :key="i"
        :class="[
          'chat w-full',
          data.user === chat.username ? 'chat-end' : 'chat-start',
        ]"
      >
        <div
          v-if="data.user !== chat.username"
          class="chat-image avatar avatar-placeholder"
        >
          <div class="bg-neutral text-neutral-content w-8 rounded-full">
            <span class="text-xs">
              {{ data.user.slice(0, 2).toUpperCase() }}
            </span>
          </div>
        </div>
        <div
          :class="[
            'chat-bubble text-gray-900 shadow flex flex-col',
            data.user === chat.username
              ? 'bg-blue-200 text-gray-900'
              : 'bg-white text-gray-900',
          ]"
        >
          <span class="text-xs font-semibold text-indigo-600 mb-1">
            {{ data.user }}
          </span>

          <span class="text-sm">
            {{ data.msg }}
          </span>
        </div>
      </div>
    </div>

    <div ref="bottomRef"></div>
  </div>
</template>
