<template>
  <nav
    class="top-0 w-full flex justify-between items-center p-5 border-b-2 border-blue-500 bg-white"
  >
    <div class="flex gap-2">
      <p v-for="(item, index) in 5" :key="index">TEST</p>
    </div>
    <div class="flex gap-2">
      <p v-for="(item, index) in 4" :key="index">TEST</p>
    </div>
  </nav>
</template>
