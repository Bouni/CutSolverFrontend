<template>
  <button class="btn btn-outline" :class="store.solverResult.lengths.length == 0 ? 'btn-disabled' : ''"
    @click="downloadCSV()">
    Export <b-icon-filetype-csv width="24" height="24" />
  </button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

const papa = inject("$papa");

const downloadCSV = () => {
  if (store.solverResult.lengths.length > 0) {
    var csv = papa.unparse(store.getCSVData());
    var csvData = new File([csv], "custolver.csv", { type: 'text/csv;charset=utf-8;' });
    var csvURL = window.URL.createObjectURL(csvData);
    var csvLink = document.createElement('a');
    csvLink.href = csvURL;
    csvLink.setAttribute('CSV', 'cutsolver.csv');
    csvLink.click();
  }
}

</script>


