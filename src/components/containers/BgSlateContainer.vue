<script setup lang="ts">
import type { IContainerButton } from './types/IContainerButton';

defineProps<{
  title: string;
  btn?: IContainerButton;
}>();
</script>

<template>
  <div class="bg-white border border-slate-200 py-2 px-4 shadow rounded-lg">
    <div class="flex justify-between items-center mb-2">
      <h3 class="flex-1 text-center font-semibold">{{ title }}</h3>
      <button
        v-if="btn"
        class="px-2 text-white bg-teal-500 hover:bg-teal-400 shadow-md hover:shadow-lg rounded-md"
        @click="btn?.onClick"
        :type="btn.type"
      >
        {{ btn.text }}
      </button>
    </div>
    <hr class="my-2 border-none h-[1.4px] bg-teal-500 rounded-full" />
    <slot></slot>
  </div>
</template>
