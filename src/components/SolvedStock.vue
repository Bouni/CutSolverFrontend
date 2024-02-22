<template>
  <div class="w-full h-10 bg-base-100 rounded divide-x-2 inline-flex" v-for="stock in store.solverResult.lengths"
    v-if="store.solverResult">
    <div class="h-10 bg-secondary first:rounded-l last:rounded-r" :style="calc_length(length[0])" v-for="length in stock">
      <div class="text-primary-content">{{ length[1] }}</div>
      <div class="text-xs text-primary-content -m-1">{{ length[0] }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

const calc_length = (length: number) => {
  return `width: ${(length + store.solverResult.job.cut_width) / store.solverResult.job.max_length * 100}%`
}

</script>
