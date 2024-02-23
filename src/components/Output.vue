<template>
  <div class="card bg-base-300">
    <div class="card-body items-center text-center pt-2" v-if="store.solverResult.lengths.length > 0">
      <h2 class="card-title text-3xl font-normal mb-1">Output</h2>
      <div>Solved using {{ store.solverResult.solver_type }} in {{ store.solverResult.time_us }}us</div>
      <SolvedStock />
      <Export />
    </div>
    <div class="card-body items-center text-center pt-2" v-else>
      <h2 class="card-title text-3xl font-normal mb-1">Output</h2>
      <p>Click solve to calculate</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SolvedStock from "@/components/SolvedStock.vue"
import Export from "@/components/Export.vue"
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()
</script>
