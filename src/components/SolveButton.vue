<template>
  <div>
    <button class="btn btn-primary btn-outline btn-lg rounded-lg" :class="allItemsValid ? '' : 'btn-disabled'"
      @click="store.solve()">Solve</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

const allItemsValid = computed(() => {
  let valid = true
  if (store.inputData.length == 0) {
    valid = false
  }
  store.inputData.forEach((item) => {
    if (item.quantity <= 0 || item.length <= 0 || item.length > store.stockData.length) {
      valid = false
    }
  })
  return valid
})


</script>
