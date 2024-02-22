<template>
  <div>
    <button class="btn btn-primary btn-outline btn-lg rounded-lg" @click="store.solve()">Solve</button>
  </div>
</template>

<script setup lang="ts">
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

</script>
