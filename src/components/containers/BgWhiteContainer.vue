<script setup lang="ts">
import type { IContainerButton } from './types/IContainerButton';

defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="bg-white shadow-2xl border border-slate-300 rounded-lg py-4 px-6">
    <p class="text-center mb-5 text-2xl font-bold italic text-slate-700">{{ title }}</p>
    <hr class="mb-5" />
    <slot></slot>
  </div>
</template>
