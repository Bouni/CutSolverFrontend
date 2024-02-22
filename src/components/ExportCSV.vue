<template>
  <button class="btn btn-outline" @click="downloadCSV()">
    Export <b-icon-filetype-csv width="24" height="24" />
  </button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { notify } from "notiwind"
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

const papa = inject("$papa");

const downloadCSV = () => {
  var csv = papa.unparse(store.getCSVData());
  var csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var csvURL = window.URL.createObjectURL(csvData);
  var csvLink = document.createElement('a');
  csvLink.href = csvURL;
  csvLink.setAttribute('CSV', 'cutsolver.csv');
  csvLink.click();
}

</script>


