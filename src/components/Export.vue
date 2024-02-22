<template>
  <div class="m-4 items-center text-center">
    <ExportPDF />
    <ExportCSV />
  </div>
</template>

<script setup lang="ts">
import ExportPDF from "@/components/ExportPDF.vue"
import ExportCSV from "@/components/ExportCSV.vue"
</script>
