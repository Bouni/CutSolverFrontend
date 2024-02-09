<template>
  <div class="card bg-base-300">
    <div class="card-body items-center text-center pt-2">
      <h2 class="card-title text-3xl font-normal">Input</h2>
      <InputStockForm />
      <InputPartsTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputStockForm from "@/components/InputStockForm.vue"
import InputPartsTable from "@/components/InputPartsTable.vue"
</script>
