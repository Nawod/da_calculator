<script setup lang="ts">
import DCalculator from './components/DCalculator.vue'
</script>

<template>
  <div class="h-screen relative bg-bg-white">
    <div class="w-full h-full absolute z-0">
      <div class="h-[40.62%] bg-bg-blue"></div>
    </div>
    <div class="relative z-1 flex flex-col items-center pt-20">
      <h1 class="text-3xl text-white font-semibold">
        Dijiktra’s Algorithm Calculator
      </h1>
      <p class="text-lg text-white font-normal mt-4 mb-20">
        Discovering Optimal Routes Through Nodes Using Dijkstra's Method
      </p>
      <DCalculator />
    </div>
  </div>
</template>
