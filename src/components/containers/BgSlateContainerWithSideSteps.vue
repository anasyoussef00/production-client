<script setup lang="ts">
import type { ISideSteps } from './types/ISideSteps';

defineProps<{
  title: string;
  sideSteps: ISideSteps[];
}>();
</script>

<template>
  <div class="bg-slate-50 shadow-2xl border border-slate-300 rounded-lg py-4 px-6 w-10/12">
    <p class="text-center mb-5 text-2xl font-bold italic text-slate-700">{{ title }}</p>
    <hr class="mb-5" />
    <form>
      <div v-for="(sideStep, index) in sideSteps" :key="sideStep.id">
        <div class="grid grid-cols-3 gap-x-32">
          <section>
            <p class="text-xl font-bold group">
              <a :href="`#${sideStep.id}`"
                ><span class="hidden group-hover:inline">#</span> {{ sideStep.title }}</a
              >
            </p>
            <p class="italic text-slate-700">{{ sideStep.description }}</p>
          </section>
          <section class="col-span-2" :id="sideStep.id">
            <slot :name="sideStep.id"></slot>
          </section>
        </div>
        <hr class="my-5" />
      </div>
      <div class="flex justify-between">
        <button
          class="bg-red-500 hover:bg-red-400 shadow-md hover:shadow-lg text-white p-2 rounded-md"
        >
          Supprimer
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-400 shadow-md hover:shadow-lg text-white p-2 rounded-md"
        >
          Enregistrer
        </button>
      </div>
    </form>
  </div>
</template>
