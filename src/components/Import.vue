<template>
  <div class="flex items-center cursor-pointer justify-center relative">
    <label for="file">
      <div>
        <button class="btn btn-outline">
          Import <b-icon-filetype-csv width="24" height="24" />
        </button>
      </div>
    </label>
    <input id="csv" name="csv" type="file" @change="onFileSelected" class="absolute w-full h-full opacity-0">
    <div class="tooltip tooltip-right ml-2" data-tip="Import a CSV file with input data">
      <b-icon-info-circle width="12px" height="12px" class="ml-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { notify } from "notiwind"
import { useSolverStore } from '@/stores/solver'

const store = useSolverStore()

const papa = inject("$papa");

const onFileSelected = (event) => {
  const reader = new FileReader()
  reader.onload = () => {

    const data = papa.parse(reader.result, { skipEmptyLines: true, dynamicTyping: true })
    data.errors.forEach((error: object) => {
      notify({
        group: "bottom",
        title: "CSV import error",
        text: error.message
      }, 4000)
    })
    // Remove header if present
    if (data.data[0][0] === "Name") {
      data.data.splice(0, 1)
    }
    data.data.forEach((line) => {
      store.addItem({ name: line[0], quantity: line[1], length: line[2] })
    })

  }
  // start reading the file. When it is done, calls the onload event defined above.
  reader.readAsBinaryString(event.target.files[0])
}
</script>
